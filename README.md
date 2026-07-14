# Astro 7 build fix

Copy the `src` directory from this archive into the repository root, preserving paths.

Then delete these obsolete Astro 5 files. They conflict with the new Content Layer and native i18n routes:

```powershell
Remove-Item -LiteralPath "src/content/config.ts"
Remove-Item -LiteralPath "src/pages/[locale]/rss.xml.ts"
```

For Git Bash/macOS/Linux:

```bash
rm -f src/content/config.ts 'src/pages/[locale]/rss.xml.ts'
```

Clear generated Astro state and rebuild:

```powershell
Remove-Item -Recurse -Force .astro -ErrorAction SilentlyContinue
npm run build
```
