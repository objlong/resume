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
            init: function () {
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
            init: function () {
                var PageOne = React.createClass({displayName: "PageOne",
                    render: function() {
                        return (
                            React.createElement("div", {className: "page-1"}, 
                                React.createElement(Nav, null), 
                                React.createElement(Option, null), 
                                React.createElement(Option, null), 
                                React.createElement(Option, null), 
                                React.createElement(Option, null), 
                                React.createElement(Option, null), 
                                React.createElement(Option, null)
                            )
                        );
                    }
                });
                var Nav = React.createClass({displayName: "Nav",
                    render: function () {
                        return (
                            React.createElement("div", {className: "allNav"}, 
                                React.createElement("div", {className: "navTitle"}, 
                                    "基本特性"
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
                            React.createElement("span", null, "特性:"), 
                            React.createElement("span", null, "A+")
                            )
                        )
                    }
                });
                ReactDOM.render(
                  React.createElement(PageOne, null),
                  document.getElementById('main-wrap-1')
                );
            }
        },
        page_two: {
        	init: function () {
        		var PageTwo = React.createClass({displayName: "PageTwo",
        			render: function () {
        				return (
        					React.createElement("div", {className: "page-2"}
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
        	init: function () {
        		var PageThree = React.createClass({displayName: "PageThree",
        			render: function () {
        				return (
        					React.createElement("div", {className: "page-3"}
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
        	init: function () {
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

