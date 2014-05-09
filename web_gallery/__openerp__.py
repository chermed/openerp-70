# -*- coding: utf-8 -*-
##############################################################################
#
#    Web gallery module for OpenERP, Saiku reports for OpenERP
#    Copyright (C) 2014  (<http://http://www.doyoubuzz.com/cherkaoui-mohamed>)
#    By : Mohamed Cherkaoui    E-mail : chermed@gmail.com
#
#    This file is a part of Web gallery
#
#    Web gallery is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    Web gallery is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################
{
    'name': 'Web gallery',
    'version': '1.0',
    'category': 'Others',
    'sequence': 14,
    'description': """
Web Gallery for OpenERP
=========================
    """,
    'author': 'Mohamed Cherkaoui',
    'website': 'http://ma.linkedin.com/in/mohamedcherkaoui/',
    'images': [],
    'depends': ['web','document'],
    'js': [
           'static/src/js/gallery.js',
    ],
    'qweb': [],
    'data': [
    ],
    'demo': [
    ],
    'test': [
    ],
    'css': [
            'static/src/css/gallery_style.css',
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}