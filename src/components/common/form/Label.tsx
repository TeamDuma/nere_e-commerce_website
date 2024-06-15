import cn from 'classnames';

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...rest
}) => {
  return (
    <label
      className={cn(
        'text-body-dark mb-3 block text-sm font-semibold leading-none',
        className
      )}
      {...rest}
    />
  );
};

export default Label;
