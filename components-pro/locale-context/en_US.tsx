import { Lang } from './enum';
import { Locale } from './locale';

const locale: Locale = {
  lang: Lang.en_US,
  Tabs: {
    rename: 'Rename',
    default: 'Default',
    restore_default: 'Restore default',
    set_default: 'Set as default',
    set_default_tip: 'The tab set as the default will be displayed by default in the next time.',
    show_count: 'Display number',
    yes: 'Yes',
    no: 'No',
    save: 'Save',
    customization_settings: 'Tab page display settings',
  },
  Table: {
    show_cached_seletion: 'Show all selected records',
    hide_cached_seletion: 'Hide all selected records',
    selection_tips: '{count} data selected',
    select_current_page: 'Select the current page',
    unselect_current_page: 'Unselect the current page',
    select_all_page: 'Select all pages',
    unselect_all_page: 'Unselect all pages',
    edit_button: 'Edit',
    create_button: 'Create',
    save_button: 'Save',
    cancel_button: 'Cancel',
    delete_button: 'Delete',
    remove_button: 'Remove',
    reset_button: 'Reset',
    query_button: 'Query',
    expand_button: 'Expand',
    collapse_button: 'Collapse',
    export_button: 'Export',
    export_waiting: 'The amount of data is relatively large, wait patiently',
    more_button: 'Others',
    advanced_search: 'Advanced Search',
    dirty_info: 'Display condition has changed.',
    restore: 'Restore',
    empty_data: 'No data',
    choose_export_columns: 'Please select the column to export',
    column_name: 'Column Name',
    filter_bar_placeholder: 'Table Filter',
    advanced_query: 'Advanced Query',
    advanced_query_conditions: 'Advanced Queries',
    more: 'More',
    defalut_export: 'Default export file',
    download_button: 'Download',
    export_failed: 'Export failed ',
    export_success: 'Export Successed',
    export_ing: 'Exporting...',
    retry_button: 'retry',
    export_break: 'Data export interrupted, click Retry to export again.',
    export_operating: 'Exporting table data. Click Cancel to terminate the export',
    enter_text_filter: 'Enter text to filter',
    clear_filter: 'Clear filter',
    save_filter: 'Save filter',
    file_name: 'File name',
    collapse: 'Collapse',
    predefined_fields: 'Predefined fields',
    add_filter: 'Add filter',
    enter_search_content: 'Fuzzy query, aggregate high-frequency text fields',
    save_as: 'Save as',
    no_save_filter: 'No save filter',
    modified: 'Modified',
    fast_filter: 'Fast filter',
    default_flag: 'Default',
    rename: 'Rename',
    set_default: 'Set as Default',
    cancel_default: 'Cancel default',
    filter_rename: 'Filter rename',
    save_filter_as: 'Save filter as',
    whether_delete_filter: 'Whether to delete the filter record',
    filter_name: 'Filter name',
    please_enter: 'Please enter',
    query_option_yes: 'Yes',
    query_option_no: 'No',
    customization_settings: 'Settings of customization',
    display_settings: 'Settings of display',
    view_display: 'View of display',
    tiled_view: 'Tiled view',
    aggregation_view: 'Aggregation view',
    density_display: 'Density of display',
    normal: 'Normal',
    compact: 'Compact',
    parity_row: 'Zebra pattern',
    table_settings: 'Settings of table',
    height_settings: 'Settings of height',
    auto_height: 'Auto height',
    fixed_height: 'Fixed height',
    flex_height: 'Responsive height',
    flex_height_help: 'Table height = window height - responsive height',
    column_settings: 'Settings of column',
    restore_default: 'Restore to default',
    left_lock: 'Lock on the left',
    right_lock: 'Lock on the right',
    unlocked: 'Unlocked',
    unlock: 'Unlock',
    top: 'Top',
    up: 'Up',
    down: 'Down',
    row_expand_settings: 'Row expansion settings',
    expand_cell: 'Expand the cell',
    expand_row: 'Expand the entire row',
    expand_column: 'Expand the entire column',
    collapse_cell: 'Collapse the cell',
    collapse_row: 'Collapse the entire row',
    collapse_column: 'Collapse the entire column',
  },
  Pagination: {
    page: 'Page',
    jump_to: 'Jump to:',
    jump_to_confirm: 'Confirm',
    records_per_page: 'Number of items per page:',
  },
  Upload: {
    file_selection: 'Select File',
    click_to_upload: 'Click to Upload',
    upload_success: 'Upload successfully',
    upload_failure: 'Fail to upload',
    no_file: 'No File',
    been_uploaded: 'File uploaded',
    upload_path_unset: 'Upload path unset',
    not_acceptable_prompt: 'Upload List contains unacceptable file, accept:',
    file_list_max_length: 'Number of files exceeded the maximum',
  },
  Attachment: {
    value_missing_no_label: 'Please upload attachments. ',
    value_missing: 'Please upload {label}. ',
    upload_attachment: 'Upload attachment',
    upload_picture: 'Upload picture',
    download_all: 'Download all',
    view_attachment: 'View attachment',
    no_attachments: 'No attachments',
    by_upload_time: 'By upload time',
    by_name: 'By name',
    operation_records: 'Operation records',
    view_operation_records: 'View operation records',
    download: 'Download',
    delete: 'Delete',
    file_max_size: 'File size cannot exceed: {size}',
    file_list_max_length: 'The maximum number of files is limited to: {count}',
    file_type_mismatch: 'File type mismatch, correct type: {types}',
  },
  Modal: {
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    preview_picture: 'Preview picture',
  },
  DataSet: {
    unsaved_data_confirm: `There's unsaved data, continue?`,
    invalid_query_dataset: 'Query condition dataSet verification failed.',
    delete_selected_row_confirm: 'Are you sure to delete the selected row?',
    delete_all_row_confirm: 'Are you sure to delete all rows?',
    query_failure: 'Fail to query data.',
    submit_success: 'Submit successfully.',
    submit_failure: 'Fail to submit data.',
    cannot_add_record_when_head_no_current: `Can't create new row record when head record unselected.`,
  },
  DatePicker: {
    value_missing_no_label: 'Please choose a date.',
    value_missing: 'Please select {label}.',
    type_mismatch: 'Please enter a valid date.',
    ok: 'OK',
    today: 'Today',
    now: 'Now',
    this_week: 'This week',
    invalid_date: 'Invalid date',
  },
  EmailField: {
    value_missing_no_label: 'Please input an email address.',
    value_missing: 'Please input {label}.',
    type_mismatch: 'Please input a valid email address.',
  },
  IntlField: {
    modal_title: 'Input multi-language information.',
  },
  NumberField: {
    value_missing_no_label: 'Please input a number.',
    value_missing: 'Please input {label}.',
  },
  Radio: {
    value_missing_no_label: 'Please make a choice.',
    value_missing: 'Please select {label}.',
  },
  SelectBox: {
    value_missing_no_label: 'Please make a choice.',
    value_missing: 'Please select {label}.',
  },
  Select: {
    value_missing_no_label: 'Please make a choice.',
    value_missing: 'Please select {label}.',
    no_matching_results: 'No matching results.',
    select_all: 'Select All',
    select_re: 'Re Select',
    unselect_all: 'None',
    common_item: 'Common Items',
  },
  Lov: {
    choose: 'Choose',
  },
  Transfer: {
    items: 'items',
  },
  UrlField: {
    value_missing_no_label: 'Please input a url address.',
    value_missing: 'Please input {label}.',
    type_mismatch: 'Please input a valid url address.',
  },
  ColorPicker: {
    value_missing_no_label: 'Please select a color.',
    value_missing: 'Please select {label}.',
    type_mismatch: 'Please select a valid color.',
  },
  Validator: {
    bad_input: 'Please input a number.',
    pattern_mismatch: 'Please input a valid value.',
    range_overflow: '{label} must be less than or equal to {max}.',
    range_underflow: '{label} must be greater than or equal to {min}.',
    step_mismatch: 'Please input a valid value. The closest valid value is {0}.',
    step_mismatch_between:
      'Please input a valid value. The two closest valid values are {0} and {1}.',
    too_long:
      'Please decrease the length of the value down to {maxLength} or less characters (You have input {length} characters).',
    too_short:
      'Please increase the length of the value down to {minLength} or more characters (You have input {length} characters).',
    type_mismatch: 'Please input a value to match the given type.',
    value_missing_no_label: 'Please input a value.',
    value_missing: 'Please input {label}.',
    unique: 'The value is duplicate, please input another one.',
    unknown: 'Unknown error.',
  },
  Icon: {
    icons: ' Icons',
    whatsNew: 'New',
    direction: 'Directional',
    suggestion: 'Suggested',
    edit: 'Editor',
    data: 'Data',
    other: 'Application',
    series: 'Series',
  },
  Cascader: {
    please_select: 'Please select',
    value_missing_no_label: 'Please make a choice.',
    value_missing: 'Please select {label}.',
    select_all: 'Select All',
    unselect_all: 'None',
  },
  Screening: {
    selected: 'Selected',
    pack_up: 'Pack up',
    more: 'More',
    multi_select: 'Multi-select',
    confirm: 'Confirm',
    cancel: 'Cancel',
  },
};

export default locale;
