import { classNames } from '@/lib/classNames';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  variant?: 'normal';
  dimension?: 'small' | 'medium' | 'big';
}

const variantClasses = {
  normal: 'bg-gray-100 border border-border-base rounded',
};

const sizeClasses = {
  small: 'text-sm h-9',
  medium: 'h-12',
  big: 'h-14',
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      error,
      children,
      variant = 'normal',
      dimension = 'medium',
      disabled = false,
      type = 'text',
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className='mb-2 block text-base font-bold leading-[18.88px] text-[#3E3E3E]'
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={classNames(
            'flex w-full items-center border border-[#298592] px-4 text-sm',
            'transition duration-300 ease-in-out focus:outline-none focus:ring-0',
            variantClasses[variant],
            sizeClasses[dimension],
            error && 'border-red-500',
            disabled && 'cursor-not-allowed bg-gray-100',
            inputClassName
          )}
          disabled={disabled}
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {error && <p className='mt-2 text-xs text-red-500'>{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;
