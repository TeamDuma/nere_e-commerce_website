import { classNames } from '@/lib/classNames';
import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'normal';
  size?: 'big' | 'medium' | 'small';
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
const classes = {
  root: 'inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:ring-1',
  normal:
    'border-primary bg-primary text-white font-medium rounded-full hover:bg-[#298592] hover:shadow flex gap-x-2',
  loading:
    'h-4 w-4 rounded-full border-2 border-transparent border-t-2 animate-spin',
  disabled: 'cursor-not-allowed !bg-[#298592]',
  small: 'px-3 py-0 h-9 text-sm h-10',
  medium: 'px-5 py-0 h-12',
  big: 'px-20 py-0 h-14',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'normal',
      size = 'medium',
      children,
      active,
      loading = false,
      disabled = false,
      ...rest
    } = props;
    const classesName = classNames(
      classes.root,
      variant === 'normal' && classes.normal,
      disabled && variant === 'normal' && classes.disabled,
      size === 'small' && classes.small,
      size === 'medium' && classes.medium,
      size === 'big' && classes.big,
      className
    );

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className={classesName}
        disabled={disabled}
        {...rest}
      >
        {children}
        {loading && (
          <span
            className={classes.loading}
            style={{
              borderTopColor: '#ffffff',
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
