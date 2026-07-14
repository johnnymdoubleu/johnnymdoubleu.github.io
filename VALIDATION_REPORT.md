# Validation report

The replacement files were copied into an isolated Astro 7.0.9 project with:

- an English sample content entry at `src/content/blog/en/test.md`;
- a Korean sample content entry at `src/content/blog/kr/test.md`;
- the same native i18n routing arrangement used by the website.

Validation result:

```text
astro check
Result (28 files):
- 0 errors
- 0 warnings
- 0 hints
```

The production build completed and generated:

```text
/blog/index.html
/blog/test/index.html
/kr/blog/index.html
/kr/blog/test/index.html
/rss.xml
/kr/rss.xml
```

The generated English and Korean article pages both contained their rendered Markdown bodies.
