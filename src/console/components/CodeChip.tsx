interface CodeChipProps {
  text: string;
}

export default function CodeChip(props: CodeChipProps) {
  return (
    <code class="inline-block rounded-md bg-surface-container-highest px-2 py-0.5 font-mono text-[13px] text-on-surface-variant">
      {props.text}
    </code>
  );
}
