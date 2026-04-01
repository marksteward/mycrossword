import * as React from 'react';
import { getBem } from '../../utils/bem';
import './GridInput.css';

interface GridInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  visible: boolean;
}

const GridInput = React.forwardRef<HTMLInputElement, GridInputProps>(
  ({ onChange, onKeyDown, visible }, ref) => {
    const bem = getBem('GridInput');
    return (
      <form autoComplete="off">
        <input
          autoComplete="off"
          autoCorrect="off"
          autoFocus={false}
          className={bem(
            'GridInput',
            !visible ? 'GridInput--inclusivelyHidden' : null,
          )}
          maxLength={2}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={ref}
          spellCheck="false"
          tabIndex={-1}
          type="text"
          value=""
        />
      </form>
    );
  },
);

export default GridInput;
