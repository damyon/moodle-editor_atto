YUI.add('moodle-atto_html-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor html plugin.
 *
 * @package    editor-atto
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
M.atto_html = M.atto_html || {
    /**
     * Are we in html editing mode or not?
     */
    ishtml : false,

    init : function(params) {
        var click = function(e, elementid) {
            e.preventDefault();
            var textarea = Y.one('#' + elementid);
            var atto = Y.one('#' + elementid + 'editable');

            if (M.atto_html.ishtml) {
                M.editor_atto.enable_all_widgets(elementid);
                atto.setHTML('');
                atto.append(textarea.get('value'));
                textarea.hide();
                atto.show();
            } else {
                M.editor_atto.disable_all_widgets(elementid);
                M.editor_atto.enable_widget(elementid, 'html');
                textarea.set('value', atto.getHTML());
                atto.hide();
                textarea.show();
            }

            M.atto_html.ishtml = !M.atto_html.ishtml;
        };

        M.editor_atto.add_toolbar_button(params.elementid, 'html', params.icon, params.group, click);
    }
};


}, '@VERSION@', {"requires": ["node"]});
