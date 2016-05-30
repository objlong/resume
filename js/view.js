var view = (function () {
// menu   
    var Item = React.createClass({displayName: "Item",
        render: function () {
            return (
                React.createElement("div", {className: 'item ' + this.props.cl, onClick: this.props.click, "data-id": this.props.every.id}, 
                    this.props.every.select
                )       
            );                    
        }
    }); 
    var Menu = React.createClass({displayName: "Menu",
        getInitialState: function() {
            return {
                class: 'item-1',
                item: [
                    {
                        id: 1,
                        select: "模块1"
                    },
                    {
                        id: 2,
                        select: "模块2"
                    },
                    {
                        id: 3,
                        select: "模块3"
                    },
                    {
                        id: 4,
                        select: "模块4"
                    }
                ]
            }
        },
        handleNextPage: function(i) {
            var id = this.state.item[i].id;
            switch (id) {
                case 0:
                    var d = {
                        class: 'item-1',
                        item: [
                            {
                                id: 1,
                                select: "模块1"
                            },
                            {
                                id: 2,
                                select: "模块2"
                            },
                            {
                                id: 3,
                                select: "模块3"
                            },
                            {
                                id: 4,
                                select: "模块4"
                            }
                        ]   
                    };
                    break;
                default:
                    var d = {
                        class: 'item-2',
                        item: [
                            {
                                id: 0,
                                select: "模块0"
                            },
                            {
                                id: 1,
                                select: "模块1"
                            },
                            {
                                id: 2,
                                select: "模块2"
                            },
                            {
                                id: 3,
                                select: "模块3"
                            },
                            {
                                id: 4,
                                select: "模块4"
                            }
                        ]   
                    };
                    break;
            }
            this.setState(d);
        },
        render: function() {
            var items = this.state.item.map(function(every, i) {
                return React.createElement(Item, {cl: this.state.class, every: every, key: every.id, click: this.handleNextPage.bind(this, i)});
            }.bind(this));
            return (
                React.createElement("div", {className: "all"}, 
                    items
                )
            );
        }        
    });
    ReactDOM.render(
      React.createElement(Menu, null),
      document.getElementById('menu')
    );
    var view = {
        home: {
            render: function () {
                var data = {
                    ps: {
                        img: "imgs/1.jpg",
                        name: "XXX",
                        birth: "XXX",
                        post: "XXXXX"
                    }
                };
                var PageZero = React.createClass({displayName: "PageZero",
                    render: function() {
                        return (
                            React.createElement("div", {className: "page-0"}, 
                                React.createElement(Ps, {ps: this.props.data.ps})
                            )
                        );
                    }
                });
                var Ps = React.createClass({displayName: "Ps",
                    render: function () {
                        return (
                            React.createElement("div", {className: "ps"}, 
                                React.createElement(Portrait, {img: this.props.ps.img}), 
                                React.createElement(Desc, {name: this.props.ps.name, birth: this.props.ps.birth}), 
                                React.createElement(Post, {post: this.props.ps.post})
                            )
                        )
                    }
                });
                var Portrait = React.createClass({displayName: "Portrait",
                    render: function () {
                        return (
                            React.createElement("div", {className: "portrait"}, 
                                React.createElement("img", {src: this.props.img})
                            )
                        );
                    }
                });
                var Desc = React.createClass({displayName: "Desc",
                    render: function() {
                        return (
                            React.createElement("div", {className: "desc"}, 
                                React.createElement("span", null, this.props.name), 
                                React.createElement("span", null, this.props.birth)
                            )
                        );
                    }
                });
                var Post = React.createClass({displayName: "Post",
                    render: function () {
                        return (
                            React.createElement("div", {className: "post"}, this.props.post)
                        )
                    }
                });
                ReactDOM.render(
                  React.createElement(PageZero, {data: data}),
                  document.getElementById('main-wrap-0')
                );
            }
        },
        page_one: {
            render: function () {
            	var data ={
            		list:[
            			{
            				key: 1,
            				title: '基本特性',
            				info: [
            					{
            						key: 1,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 2,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 3,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 4,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 5,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 6,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 7,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 8,
            						caption: 'name',
            						content: 'xxx'
            					}
            				]
            			},
            			{
            				key: 2,
            				title: '基本特性',
            				info: [
            					{
            						key: 1,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 2,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 3,
            						caption: 'name',
            						content: 'xxx'
            					},
            					{
            						key: 4,
            						caption: 'name',
            						content: 'xxx'
            					}
            				]
            			}
            		]
            	};
                var Nav = React.createClass({displayName: "Nav",
                    render: function () {
                        return (
                            React.createElement("div", {className: "allNav"}, 
                                React.createElement("div", {className: "navTitle"}, 
                                    this.props.title
                                ), 
                                React.createElement("div", {className: "navBar"}, 
                                    React.createElement("div", {className: "navBar-cir"}
                                    ), 
                                    React.createElement("div", {className: "navBar-1"}
                                    ), 
                                    React.createElement("div", {className: "navBar-2"}
                                    ), 
                                    React.createElement("div", {className: "navBar-1"}
                                    )
                                )
                            )
                        )
                    }
                });
                var Option = React.createClass({displayName: "Option",
                    render: function () {
                        return (
                            React.createElement("div", {className: "option-1"}, 
                            React.createElement("span", null, this.props.option.caption), 
                            React.createElement("span", null, this.props.option.content)
                            )
                        )
                    }
                });
                var AllOptions = React.createClass({displayName: "AllOptions",
                	render: function () {
                		var options = this.props.info.map(function (option) {
                			return React.createElement(Option, {option: option, key: option.key});
                		});
                		return (
                			React.createElement("div", {className: "all-options"}, 
                				options
                			)
                		);
                	}
                });
                var Box = React.createClass({displayName: "Box",
                	render: function () {
                		return (
                			React.createElement("div", null, 
                				React.createElement(Nav, {title: this.props.one.title}), 
                				React.createElement(AllOptions, {info: this.props.one.info})
                			)
                		);
                		

                	}
                });
                var PageOne = React.createClass({displayName: "PageOne",
                    render: function() {
                    	var boxes = this.props.data.list.map(function (every) {
                    		return React.createElement(Box, {one: every, key: every.key});
                    	});
                        return (
                            React.createElement("div", {className: "page-1"}, 
                                boxes
                            )
                        );
                    }
                });
                ReactDOM.render(
                  React.createElement(PageOne, {data: data}),
                  document.getElementById('main-wrap-1')
                );
            }
        },
        page_two: {
        	render: function () {
        		var Line = React.createClass({displayName: "Line",
        			render: function () {
        				return (
        					React.createElement("div", {className: "line"}
        					)
        				);
        			}
        		});
        		var SubNavName = React.createClass({displayName: "SubNavName",
        			render: function () {
        				return (
        					React.createElement("div", {className: "navname-2"}, 
        						React.createElement("span", null, "xxxx-xxxx"), 
        						React.createElement("span", null, "职业特色"), 
        						React.createElement("strong", {className: "triangle"})
        					)        					
        				);
        			}
        		});
        		var SubNav_2 = React.createClass({displayName: "SubNav_2",
        			render: function () {
        				return (
        					React.createElement("div", {className: "subnav-2"}, 
							React.createElement(Line, null), 
							React.createElement(SubNavName, null), 
							React.createElement(Line, null)
							) 
        				);
        			}
        		});
        		var PageTwo = React.createClass({displayName: "PageTwo",
        			render: function () {
        				return (
        					React.createElement("div", {className: "page-2"}, 
        						React.createElement(SubNav_2, null)
        					)
        				);
        			}
        		});
        		ReactDOM.render(
        			React.createElement(PageTwo, null),
        			document.getElementById('main-wrap-2')
        		);
        	}
        },
        page_three: {
        	render: function () {
        		var Progress = React.createClass({displayName: "Progress",
        			render: function () {
        				return (
        					React.createElement("div", {className: "pro-box"}, 
        						React.createElement("div", {className: "percen"}, 
        							"70%"
        						), 
        						React.createElement("div", {className: "half-box left-box"}, 
        							React.createElement("div", null
        							)
        						), 
        						React.createElement("div", {className: "half-box right-box"}, 
        							React.createElement("div", null
        							)
        						)
        					)
        				);
        			}
        		});
        		var PageThree = React.createClass({displayName: "PageThree",
        			render: function () {
        				return (
        					React.createElement("div", {className: "page-3"}, 
        						React.createElement(Progress, null)
        					)
        				);
        			}
        		});
        		ReactDOM.render(
        			React.createElement(PageThree, null),
        			document.getElementById('main-wrap-3')
        		);
        	}
        },
        page_four: {
        	render: function () {
        		var PageFour = React.createClass({displayName: "PageFour",
        			render: function () {
        				return (
        					React.createElement("div", {className: "page-4"}
        					)
        				);
        			}
        		});
        		ReactDOM.render(
        			React.createElement(PageFour, null),
        			document.getElementById('main-wrap-4')
        		);
        	}
        },
    };
    return view;
} (this))

