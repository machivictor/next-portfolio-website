interface Props {
  section: string;
  subheading?: string;
  className?: string;
}

const SectionTitle = (props: Props) => {
  return (
    <h2 className={props.className}>
      <div className="text-base text-amber font-default font-semibold tracking-wider md:text-lg">
        {props.section.toUpperCase()}
      </div>
      {props.subheading && props.subheading}
    </h2>
  );
};

export default SectionTitle;
