import { classNames } from '@/lib/classNames';
import React, { TextareaHTMLAttributes } from 'react';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  variant?: 'normal';
}

const variantClasses = {
  normal: 'bg-gray-100 border border-border-base border',
};

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    className,
    label,
    name,
    error,
    variant = 'normal',
    inputClassName,
    ...rest
  } = props;
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className='text-body-dark mb-3 block text-sm font-semibold leading-none'
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        className={classNames(
          'flex w-full appearance-none items-center px-4 py-3 text-sm rounded-lg',
          'transition duration-300 ease-in-out focus:border-[#298592] focus:outline-none focus:ring-0',
          error && 'border-red-500',
          variantClasses[variant],
          inputClassName
        )}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        rows={4}
        ref={ref}
        {...rest}
      />
      {error && <p className='my-2 text-xs text-red-500'>{error}</p>}
    </div>
  );
});
TextArea.displayName = 'TextArea';
export default TextArea;
