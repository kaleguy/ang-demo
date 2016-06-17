/*!
 * angularjs-color-selectbox v1.0.4
 * https://github.com/kaleguy/angular-color-selectbox/
 *
 * Copyright 2016 kaleguy
 *
 * 2016-04-06 17:47:58
 *
 */
"use strict";

/* commonjs package manager support (eg. componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = 'color.selectbox';
}

(function () {
    'use strict';

    angular.module('color.selectbox', []);
})();
//# sourceMappingURL=app.module.js.map

'use strict';

(function () {

    'use strict';

    function colorSelectbox(document) {

        var cpSize = 25;
        var elId = '';

        var pallette = ['Aqua', 'AquaMarine', 'Bisque', 'Black', 'Blue', 'BlueViolet', 'Brown', 'CadetBlue', 'Chocolate', 'CornflowerBlue', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DeepPink', 'Fuchsia', 'Gray', 'Green', 'HotPink', 'LightBlue', 'Lime', 'LimeGreen', 'Maroon', 'Magenta', 'MidnightBlue', 'Navy', 'Olive', 'Orange', 'OrangeRed', 'Pink', 'Purple', 'Red', 'Salmon', 'Silver', 'Tan', 'Teal', 'Violet', 'Yellow', 'YellowGreen'];

        activate();

        return {
            restrict: 'E',
            scope: {
                color: '=',
                item: '=',
                onselect: '=',
                position: '=',
                autohide: '=',
                size: '='
            },
            template: '<span class="color_square;" style="cursor:pointer;">' + '<i class="fa fa-square" style="color:{{color}}"></i>' + '</span>',
            //    controller: controller,
            //    controllerAs: 'cp',
            link: link
        };

        function link(scope, element) {

            element = $(element);

            element.click(function () {

                document.on('mousedown', hideColorSelectbox);

                var span = element.children('span');
                var top = span.offset().top;
                var left = span.offset().left;

                var cp = $('#' + elId);
                if (scope.position === 'right') {
                    cp.css('left', left + 16);
                } else {
                    cp.css('left', left - Math.sqrt(cpSize) * 24);
                }
                cp.css('top', top);
                cp.show();
                var cpClick = function cpClick(e) {
                    var color = $(e.target).css('color');
                    var i = span.find('i');
                    i.css('color', color);
                    if (scope.autohide) {
                        hideColorSelectbox();
                    }
                    scope.onselect(color, scope.item);
                };
                cp.off('click');
                cp.click(cpClick);
            });
        }

        function hideColorSelectbox(e) {
            if (e) {
                var el = $(e.target).parents('#' + elId)[0];
                if (el) {
                    return;
                }
            }
            $('#' + elId).hide();
            document.off('mousedown', hideColorSelectbox);
        }
        function activate() {

            if (window.cpSize) {
                cpSize = window.cpSize;
            }
            elId = 'sr_cp_' + cpSize;

            document.bind('keypress', function (e) {
                if (e.keyCode === 27) {
                    $('#' + elId).hide();
                }
            });

            var cp = $('<DIV/>', { id: elId }).appendTo('body');
            cp.addClass('sr_cp');
            var squares = [];
            var cpWidth = parseInt(Math.sqrt(cpSize)) * 19 + 16;

            _.range(cpSize).forEach(function () {
                return squares.push('<i>&#xf0c8</i>');
            });

            var color_menu_string = squares.join('');
            cp.html(color_menu_string);

            var cpEl = $('#' + elId);
            var dots = cpEl.find('i');
            _.each(dots, function (dot, i) {
                return $(dot).css('color', pallette[i]);
            });

            cpEl.css('width', cpWidth);
            cpEl.css('height', cpWidth);
        }
        function setMenu() {}
    }

    colorSelectbox.$inject = ['$document'];

    angular.module('color.selectbox', []).directive('colorSelectbox', colorSelectbox);
})();
//# sourceMappingURL=color-selectbox.directive.js.map
