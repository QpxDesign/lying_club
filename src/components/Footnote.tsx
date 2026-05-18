export interface FootnoteProps {
  link: string;
  number: number;
}

export default function Footnote(props: FootnoteProps) {
  return (
    <a className="footnote" href={props.link}>
      [{props.number}]
    </a>
  );
}
