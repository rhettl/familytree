angular.module('MyModule', [], function($httpProvider)
{
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data)
    {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj)
        {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;

            for(name in obj)
            {
                value = obj[name];

                if(value instanceof Array)
                {
                    for(i=0; i<value.length; ++i)
                    {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if(value instanceof Object)
                {
                    for(subName in value)
                    {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                }
                else if(value !== undefined && value !== null)
                {
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
});


function mainController($scope, $http){
    $scope.possible_langs = possible_langs;
    $scope.default_lang = default_lang;
    $scope.lang_checkboxes = {};
    $scope.langs = {};

    this.checkLangs = function(){
        angular.forEach(this.lang_checkboxes, function(item, i){
            if (item && !self.langs[i]){
                $scope.getLang(i);
            } else if (!item && self.langs[i]){
                $scope.removeLang(i);
            }
        });
        console.log($scope.langs);
    };

    $scope.getLang = function(lang){
        $http.post('/includes/assets/scripts/rest/json.php', {func: 'make_specs_dictionary', args: [lang]})
            .success(function(){
                self.langs[lang] = data.results;
            });
    }
    $scope.removeLang = function(lang){
        delete $scope.langs[lang];
    };

//    $scope.getlang($scope.default_lang);
}