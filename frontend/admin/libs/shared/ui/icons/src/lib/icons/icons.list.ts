// Material symbols
const generalActionsIconsSet = [
  'more_vert',
  'close',
  'settings',
  'undo',
  'cancel',
  'menu',
  'help',
  'info',
  'warning',
  'refresh',
  'check',
  'check_circle',
  'add_2',
  'chevron_forward',
  'gavel',
] as const;
const fileManagementIconsSet = [
  'folder',
  'folder_open',
  'draft',
  'attach_file_add',
  'upload_file',
  'download',
  'delete',
  'content_copy',
  'content_cut',
  'content_paste',
] as const;
const layoutAndViewingIconsSet = [
  'grid_view',
  'view_list',
  'list_alt',
  'toc',
] as const;
const navigationIconsSet = [
  'open_in_browser',
  'open_in_new',
  'preview',
] as const;
const userAccountIconsSet = [
  'login',
  'logout',
  'account_circle',
  'account_box',
  'person_add',
  'group',
  'person_check',
  'person_off',
  'add_moderator',
  'remove_moderator',
  'verified_user',
  'crown',
] as const;
const securityIconsSet = [
  'visibility',
  'visibility_off',
  'lock',
  'lock_open',
  'lock_open_right',
  'lock_reset',
] as const;
const contentEditingIconsSet = ['edit', 'article', 'link', 'label'] as const;
const calendarTimeIconsSet = [
  'calendar_today',
  'event',
  'calendar_add_on',
  'edit_calendar',
] as const;
const miscellaneousIconsSet = ['discover_tune'] as const;

export const MATERIAL_ICONS = [
  ...generalActionsIconsSet,
  ...fileManagementIconsSet,
  ...layoutAndViewingIconsSet,
  ...navigationIconsSet,
  ...userAccountIconsSet,
  ...securityIconsSet,
  ...contentEditingIconsSet,
  ...calendarTimeIconsSet,
  ...miscellaneousIconsSet,
] as const;
export type MaterialIconName = (typeof MATERIAL_ICONS)[number];

// Svg icons
const fileTypeIconsSet = [
  'file',
  'file-archive',
  'file-audio',
  'file-document',
  'file-image',
  'file-pdf',
  'file-presentation',
  'file-spreadsheet',
  'file-text',
  'file-video',
] as const;

export const CUSTOM_ICONS = [...fileTypeIconsSet] as const;
export type CustomIconName = (typeof CUSTOM_ICONS)[number];

export type IconName = MaterialIconName | CustomIconName;

export const isMaterialIcon = (name: string): name is MaterialIconName =>
  (MATERIAL_ICONS as readonly string[]).includes(name as MaterialIconName);
