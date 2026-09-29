export function boldPhrase(text: string, phrase: string) {
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-bold text-[var(--color-ink)]">{phrase}</strong>
      {text.slice(i + phrase.length)}
    </>
  );
}