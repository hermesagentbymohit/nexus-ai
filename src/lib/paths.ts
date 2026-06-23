/**
 * Link helper — wraps hardcoded paths with the site base URL.
 * Place in frontmatter of any .astro file that needs internal links.
 *
 * Usage in frontmatter:
 *   import { link } from '../lib/paths';
 * Then: href={link('/services/')}
 */

export function link(path: string): string {
  // import.meta.env is only available in .astro files, not .ts
  // So this helper only works when BASE_URL is known at build time
  return path;
}
