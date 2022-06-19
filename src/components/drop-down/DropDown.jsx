import {MultiSelect} from "./MultiSelect";
import {SingleSelect} from "./SingleSelect";
import PropTypes from "prop-types";

export const DropDown = ({isMultiSelect = false, value, values, ...args}) => {
    return isMultiSelect ? <MultiSelect values={values} {...args}/> :
        <SingleSelect value={value} {...args}/>
}

DropDown.propTypes = {
    /**
     * [GENERAL] Detects is dropdown menu using multi select values
     */
    isMultiSelect: PropTypes.bool,
    /**
     * [GENERAL] ClassName for dropdown menu
     */
    className: PropTypes.object,
    /**
     * [GENERAL] Callback for onChange Event
     */
    onChange: PropTypes.func,
    /**
     * [GENERAL] Options array for dropdown menu
     */
    options: PropTypes.array,
    /**
     * [GENERAL] Placeholder for dropdown menu, if nothing selected
     */
    placeholder: PropTypes.string,
    /**
     * [SINGLE SELECT] Selected value from dropdown menu
     */
    value: PropTypes.any,
    /**
     * [MULTI SELECT] List of selected values from dropdown menu
     */
    values: PropTypes.array
}
