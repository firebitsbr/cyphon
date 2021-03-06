/**
 * Copyright 2017-2019 ControlScan, Inc.
 * 
 * This file is part of Cyphon Engine.
 * 
 * Cyphon Engine is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Cyphon Engine is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Cyphon Engine. If not, see <http://www.gnu.org/licenses/>.
 */

(function($) {
    $(document).ready(function() {

        // save selected container to source field autocomplete widgets,
        // so bottler.taste.autocomplete.FilterFieldsByContainer can
        // filter source field options appropriately
        saveMasterFieldValue('container', 'author');
        saveMasterFieldValue('container', 'title');
        saveMasterFieldValue('container', 'content');
        saveMasterFieldValue('container', 'location');
        saveMasterFieldValue('container', 'datetime');
        saveMasterFieldValue('container', 'date_string');
    });
} (django.jQuery));
