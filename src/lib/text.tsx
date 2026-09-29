export function boldPhrase(text: string, phrase: string) {
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      {/* Inherit color rather than forcing one — this renders on both light
          and dark backgrounds, and a hardcoded dark color disappears on navy. */}
      <strong className="font-bold text-current">{phrase}</strong>
      {text.slice(i + phrase.length)}
    </>
  );
}