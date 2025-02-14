import * as React from 'react';
import Select from 'react-select';
import { ISelectOption } from '../types';
import './SingleSelect.css';
import { customStylesSingleSelect, themeTransform } from '../constants';
import { Placeholder } from './Placeholder/Placeholder';

interface IProps<T> {
  selectedOption?: T;
  options: T[];
  updateSelectedOption: (option: T) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  showSearchIcon?: boolean;
}

export class SingleSelect<T extends ISelectOption> extends React.PureComponent<
  IProps<T>,
  {}
> {
  constructor(props: IProps<T>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(e: T) {
    this.props.updateSelectedOption(e);
  }

  public render() {
    const {
      disabled,
      label,
      options,
      selectedOption,
      placeholder,
      showSearchIcon
    } = this.props;
    const hasLabel = label !== undefined;
    return (
      <div className={'singleSelectContainer'}>
        {hasLabel && <label className={'singleSelectLabel'}>{label}</label>}
        <Select
          className={'singleSelectSelect'}
          options={options}
          placeholder={placeholder || ''}
          components={showSearchIcon ? { Placeholder } : {}}
          value={selectedOption || ('' as any)}
          onChange={this.handleChange}
          styles={customStylesSingleSelect}
          isDisabled={disabled}
          theme={themeTransform}
        />
      </div>
    );
  }
}
