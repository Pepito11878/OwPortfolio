interface Props {
  link?: string;
  alt: string;
  title: string;
  description: string;
}

export function Cards({link, alt, title, description}: Props) {
  return (
    <div>
      <img src={link} alt={alt} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
