/* Controllers */

function DisplayTree ($scope){
    $scope.people = {
        1: {
            id: 1,
            name: {
                real: {
                    first: 'Rhett',
                    last: 'Lowe'
                },
                alias: {
                    first: 'Latharn',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 2, type: 'real' },
                { id: 3, type: 'real' }
            ],
            offspring: [
                { id: 8, type: 'real' },
                { id: 9, type: 'real' },
                { id: 10, type: 'real' }
            ],
            images: [
                'img/1.jpg'
            ]
        },
        2: {
            id: 2,
            name: {
                real: {
                    first: 'Dawn',
                    last: 'Cotter'
                },
                alias: {
                    first: 'Dawn',
                    last: 'NicCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 1, type: 'real' },
                { id: 4, type: 'real' },
                { id: 6, type: 'real' },
                { id: 7, type: 'real' },
                { id: 5, type: 'real' }
            ],
            images: [
                'img/2.jpg'
            ]
        },
        3: {
            id: 3,
            name: {
                real: {
                    first: 'Kurt',
                    last: 'Cotter'
                },
                alias: {
                    first: 'Kurt',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 19, type: 'real' },
                { id: 20, type: 'real' }
            ],
            offspring: [
                { id: 1, type: 'real' },
                { id: 4, type: 'real' },
                { id: 6, type: 'real' },
                { id: 7, type: 'real' },
                { id: 5, type: 'real' }
            ],
            images: [
                'img/3.jpg'
            ]
        },
        4: {
            id: 4,
            name: {
                real: {
                    first: 'Douglas',
                    last: 'Emanuel'
                },
                alias: {
                    first: 'Dougal',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 2, type: 'real' },
                { id: 3, type: 'real' }
            ],
            offspring: [
                { id: 12, type: 'real' },
                { id: 13, type: 'real' },
                { id: 14, type: 'real' }
            ],
            images: [
                'img/4.jpg'
            ]
        },
        5: {
            id: 5,
            name: {
                real: {
                    first: 'Emily',
                    last: 'Springhorn'
                },
                alias: {
                    first: 'Leela',
                    last: 'NicCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 2, type: 'real' },
                { id: 3, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/5.jpg'
            ]
        },
        6: {
            id: 6,
            name: {
                real: {
                    first: 'Cassandra',
                    last: 'Crestlake'
                },
                alias: {
                    first: 'Cassie',
                    last: 'NicCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 2, type: 'real' },
                { id: 3, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/6.jpg'
            ]
        },
        7: {
            id: 7,
            name: {
                real: {
                    first: 'Jessica',
                    last: 'True'
                },
                alias: {
                    first: 'Jessi',
                    last: 'NicCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 2, type: 'real' },
                { id: 3, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/7.jpg'
            ]
        },
        8: {
            id: 8,
            name: {
                real: {
                    first: 'Child1',
                    last: 'Lowe'
                },
                alias: {
                    first: 'Child1',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 1, type: 'real' }
            ],
            offspring: [
                { id: 11, type: 'real' }
            ],
            images: [
                'img/8.jpg'
            ]
        },
        9: {
            id: 9,
            name: {
                real: {
                    first: 'Child 2',
                    last: 'Lowe'
                },
                alias: {
                    first: 'Child 2',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 1, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/9.jpg'
            ]
        },
        10: {
            id: 10,
            name: {
                real: {
                    first: 'Child 3',
                    last: 'Lowe'
                },
                alias: {
                    first: 'Child 3',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 1, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/10.jpg'
            ]
        },
        11: {
            id: 11,
            name: {
                real: {
                    first: 'G.Child 1',
                    last: 'Lowe'
                },
                alias: {
                    first: 'G.Child 1',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 8, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/11.jpg'
            ]
        },
        12: {
            id: 12,
            name: {
                real: {
                    first: 'Mathew',
                    last: 'Prewitt'
                },
                alias: {
                    first: 'Jaimie',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 4, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/12.jpg'
            ]
        },
        13: {
            id: 13,
            name: {
                real: {
                    first: 'Cathrin',
                    last: 'Garza'
                },
                alias: {
                    first: 'Cathy',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 4, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/13.jpg'
            ]
        },
        14: {
            id: 14,
            name: {
                real: {
                    first: 'Child 4',
                    last: 'True'
                },
                alias: {
                    first: 'Child 4',
                    last: 'NicCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 7, type: 'real' }
            ],
            offspring: [],
            images: [
                'img/14.jpg'
            ]
        },
        15: {
            id: 15,
            name: {
                real: {
                    first: 'G.G.Parent 1',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 1',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 17, type: 'real' }
            ],
            images: [
                'img/15.jpg'
            ]
        },
        16: {
            id: 16,
            name: {
                real: {
                    first: 'G.G.Parent 2',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 2',
                    last: 'NiccCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 17, type: 'real' }
            ],
            images: [
                'img/16.jpg'
            ]
        },
        17: {
            id: 17,
            name: {
                real: {
                    first: 'G.Parent 1',
                    last: ''
                },
                alias: {
                    first: 'G.Parent 1',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 15, type: 'real' },
                { id: 16, type: 'real' }
            ],
            offspring: [
                { id: 19, type: 'real' }
            ],
            images: [
                'img/17.jpg'
            ]
        },
        18: {
            id: 18,
            name: {
                real: {
                    first: 'G.Parent 2',
                    last: ''
                },
                alias: {
                    first: 'G.Parent 2',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 25, type: 'real' },
                { id: 26, type: 'real' }
            ],
            offspring: [
                { id: 19, type: 'real' }
            ],
            images: [
                'img/18.jpg'
            ]
        },
        19: {
            id: 19,
            name: {
                real: {
                    first: 'Parent 1',
                    last: ''
                },
                alias: {
                    first: 'Parent 1',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 17, type: 'real' },
                { id: 18, type: 'real' }
            ],
            offspring: [
                { id: 3, type: 'real' }
            ],
            images: [
                'img/19.jpg'
            ]
        },
        20: {
            id: 20,
            name: {
                real: {
                    first: 'Parent 2',
                    last: ''
                },
                alias: {
                    first: 'Parent 2',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 22, type: 'real' },
                { id: 21, type: 'real' }
            ],
            offspring: [
                { id: 3, type: 'real' }
            ],
            images: [
                'img/20.jpg'
            ]
        },
        21: {
            id: 21,
            name: {
                real: {
                    first: 'G.Parent 3',
                    last: ''
                },
                alias: {
                    first: 'G.Parent 3',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 23, type: 'real' },
                { id: 24, type: 'real' }
            ],
            offspring: [
                { id: 20, type: 'real' }
            ],
            images: [
                'img/21.jpg'
            ]
        },
        22: {
            id: 22,
            name: {
                real: {
                    first: 'G.Parent 4',
                    last: ''
                },
                alias: {
                    first: 'G.Parent 4',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [
                { id: 27, type: 'real' },
                { id: 28, type: 'real' }
            ],
            offspring: [
                { id: 20, type: 'real' }
            ],
            images: [
                'img/22.jpg'
            ]
        },
        23: {
            id: 23,
            name: {
                real: {
                    first: 'G.G.Parent 5',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 5',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 21, type: 'real' }
            ],
            images: [
                'img/23.jpg'
            ]
        },
        24: {
            id: 24,
            name: {
                real: {
                    first: 'G.G.Parent 6',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 6',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 21, type: 'real' }
            ],
            images: [
                'img/24.jpg'
            ]
        },
        25: {
            id: 25,
            name: {
                real: {
                    first: 'G.G.Parent 3',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 3',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 16, type: 'real' }
            ],
            images: [
                'img/25.jpg'
            ]
        },
        26: {
            id: 26,
            name: {
                real: {
                    first: 'G.G.Parent 4',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 4',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 16, type: 'real' }
            ],
            images: [
                'img/26.jpg'
            ]
        },
        27: {
            id: 27,
            name: {
                real: {
                    first: 'G.G.Parent 7',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 7',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 22, type: 'real' }
            ],
            images: [
                'img/27.jpg'
            ]
        },
        28: {
            id: 28,
            name: {
                real: {
                    first: 'G.G.Parent 8',
                    last: ''
                },
                alias: {
                    first: 'G.G.Parent 8',
                    last: 'MacCormac',
                    family: 'Dun Cormac'
                }
            },
            household: 'Dun Cormac',
            dates: {
                birth: new Date(1987, 12, 2),
                joined: new Date(2006, 3, 20)
            },
            parents: [],
            offspring: [
                { id: 22, type: 'real' }
            ],
            images: [
                'img/28.jpg'
            ]
        }
    }

    $scope.parentsOf = function(id){
        parents = [];
        person = $scope.people[id];
        person.parents.forEach(function(parent){
            parents.push($scope.people[parent.id]);
        });
        return parents;
    }
    $scope.childrenOf = function(id){
        children = [];
        person = $scope.people[id];
        person.offspring.forEach(function(child){
            children.push($scope.people[child.id]);
        });
        return children;
    }
    $scope.getPerson = function(id){
        return [$scope.people[id]];
    }


}