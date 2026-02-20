import './Button.module.scss';

export function Button({ type = 'button', onClick, children, variant = 'default', ariaLabel }) {
    return (
        <button
            type={type}
            className={`btn btn--${variant}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}