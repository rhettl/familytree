// This is a module for cloud persistance in mongolab - https://mongolab.com
angular.module('mongolab', ['ngResource']).
    factory('People', function($resource) {
        var colName = 'people';
        var dbName = 'tgeahretest';

        var Project = $resource('https://api.mongolab.com/api/1/databases/'+dbName+'/collections/'+colName,
            { apiKey: 'biNkqfOEjJi4mR6yi_CAYgPeKwDPT-Wt' }, {
                update: { method: 'PUT' }
            }
        );

        Project.prototype.update = function(cb) {
            return Project.update({id: this._id.$oid},
                angular.extend({}, this, {_id:undefined}), cb);
        };

        Project.prototype.destroy = function(cb) {
            return Project.remove({id: this._id.$oid}, cb);
        };

        return Project;
    });