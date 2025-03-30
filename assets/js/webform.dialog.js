/**
 * @file
 * JavaScript behaviors to fix jQuery UI dialogs.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Ensure that ckeditor has focus when displayed inside of jquery-ui dialog widget
   *
   * @see http://stackoverflow.com/questions/20533487/how-to-ensure-that-ckeditor-has-focus-when-displayed-inside-of-jquery-ui-dialog
   */
  var _allowInteraction = $.ui.dialog.prototype._allowInteraction;
  $.ui.dialog.prototype._allowInteraction = fu/**
 * @file
 * JavaScript behaviors for webform dialogs.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  // @see http://api.jqueryui.com/dialog/
  Drupal.webform = Drupal.webform || {};
  Drupal.webform.dialog = Drupal.webform.dialog || {};
  Drupal.webform.dialog.options = Drupal.webform.dialog.options || {};

  /**
   * Programmatically open a webform (or page) in a dialog.
   *
   * @param {string} url
   *   Webform URL.
   * @param {string} type
   *   Webform dialog type defined via /admin/structure/webform/config.
   */
  Drupal.webformOpenDialog = function (url, type) {
    // Create a div with link but don't attach it to the page.
    var $div = $('<div><a href="' + url + '" class="webform-dialog ' + type + '"></a></div>');
    // Init the webform dialog behavior.
    Drupal.behaviors.webformDialog.attach($div);
    // Trigger the link.
    $div.find('a').click();
  };

  /**
   * Open webform dialog using preset options.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformDialog = {
    attach: function (context) {
      $('a.webform-dialog', context).once('webform-dialog').each(function () {
        var $a = $(this);

        // Get default options.
        var options = $.extend({}, Drupal.webform.dialog.options);

        // Get preset dialog options.
        if ($a.attr('class').match(/webform-dialog-([a-z0-9_]+)/)) {
          var dialogOptionsName = RegExp.$1;
          if (drupalSettings.webform.dialog.options[dialogOptionsName]) {
            options = drupalSettings.webform.dialog.options[dialogOptionsName];

            // Unset title.
            delete options.title;
          }
        }

        // Get custom dialog options.
        if ($(this).data('dialog-options')) {
          $.extend(options, $(this).data('dialog-options'));
        }

        var href = $a.attr('href');

        // Replace ENTITY_TYPE and ENTITY_ID placeholders and update the href.
        // @see webform_page_attachments()
        if (href.indexOf('?source_entity_type=ENTITY_TYPE&source_entity_id=ENTITY_ID') !== -1) {
          if (drupalSettings.webform.dialog.entity_type && drupalSettings.webform.dialog.entity_id) {
            href = href.replace('ENTITY_TYPE', encodeURIComponent(drupalSettings.webform.dialog.entity_type));
            href = href.replace('ENTITY_ID', encodeURIComponent(drupalSettings.webform.dialog.entity_id));
          }
          else {
            href = href.replace('?source_entity_type=ENTITY_TYPE&source_entity_id=ENTITY_ID', '');
          }
          $a.attr('href', href);
        }

        // Append _webform_dialog=1 to href to trigger Ajax support.
        // @see \Drupal\webform\WebformSubmissionForm::setEntity
        href += (href.indexOf('?') === -1 ? '?' : '&') + '_webform_dialog=1';

        var element_settings = {};
        element_settings.progress = {type: 'fullscreen'};
        element_settings.url = href;
        element_settings.event = 'click';
        element_settings.dialogType = $a.data('dialog-type') || 'modal';
        element_settings.dialog = options;
        element_settings.element = this;
        element_settings.error = function error(xmlhttp, uri) {
          if (xmlhttp.status === 403) {
            window.location.replace(href.split('?')[0]);
          }
        };
        Drupal.ajax(element_settings);
      });
    }
  };

})(jQuery, Drupal, drupalSettings);nction (event) {
    if ($(event.target).closest('.cke_dialog').length) {
      return true;
    }
    return _allowInteraction.apply(this, arguments);
  };

  /**
   * Attaches webform dialog behaviors.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches event listeners for webform dialogs.
   */
  Drupal.behaviors.webformDialogEvents = {
    attach: function () {
      $(window).once('webform-dialog').on({
        'dialog:aftercreate': function (event, dialog, $element, settings) {
          setTimeout(function () {
            var hasFocus = $element.find('[autofocus]:tabbable');
            if (!hasFocus.length) {
              // Move focus to first input which is not a button.
              hasFocus = $element.find(':input:tabbable:not(:button)');
            }
            if (!hasFocus.length) {
              // Move focus to close dialog button.
              hasFocus = $element.parent().find('.ui-dialog-titlebar-close');
            }
            hasFocus.eq(0).focus();
          });
        }
      });
    }
  };

})(jQuery, Drupal);