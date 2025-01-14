import { EVENT } from './eventNames';

/* eslint-disable max-len, import/prefer-default-export */
/**
 * Name enumeration of available game options
 *
 * @property GAME_OPTION_NAMES
 * @type {Object}
 * @final
 */
export const GAME_OPTION_NAMES = {
    THEME: 'theme',
    CONTROL_METHOD: 'controlMethod',
    PROJECTED_TRACK_LINE_LENGTHS: 'ptlLengths',
    DRAW_PROJECTED_PATHS: 'drawProjectedPaths',
    SOFT_CEILING: 'softCeiling',
    DRAW_ILS_DISTANCE_SEPARATOR: 'drawIlsDistanceSeparator',
    MOUSE_CLICK_DRAG: 'mouseClickDrag',
    RANGE_RINGS: 'rangeRings'
};

/**
 * User options
 *
 * These options are presented in a modal and are stored in localStorage
 *
 * @property GAME_OPTION_VALUES
 * @type {array<object>}
 * @final
 */
export const GAME_OPTION_VALUES = [
    {
        name: GAME_OPTION_NAMES.THEME,
        defaultValue: 'DEFAULT',
        description: 'Scope Theme',
        type: 'select',
        onChangeEventHandler: EVENT.SET_THEME,
        optionList: [
            {
                displayLabel: 'Classic',
                value: 'CLASSIC'
            },
            {
                displayLabel: 'Default',
                value: 'DEFAULT'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.CONTROL_METHOD,
        defaultValue: 'classic',
        description: 'Control Method',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'Classic',
                value: 'classic'
            },
            {
                displayLabel: 'Arrow Keys',
                value: 'arrows'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.DRAW_ILS_DISTANCE_SEPARATOR,
        defaultValue: 'from-theme',
        description: 'Show trailing separation indicator on ILS',
        help: 'Draw a trailing indicator 2.5 NM (4.6km) behind landing aircraft to help with traffic spacing',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'From Theme',
                value: 'from-theme'
            },
            {
                displayLabel: 'Yes',
                value: 'yes'
            },
            {
                displayLabel: 'No',
                value: 'no'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.PROJECTED_TRACK_LINE_LENGTHS,
        defaultValue: '1-2-4-8',
        description: 'Projected Track Line (PTL) increments, in minutes',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: '1-2-4-8',
                value: '1-2-4-8'
            },
            {
                displayLabel: '1-2-4-6-8-10-12-14-16',
                value: '1-2-4-6-8-10-12-14-16'
            },
            {
                displayLabel: '1-2-3-4-5-6-7-8',
                value: '1-2-3-4-5-6-7-8'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.DRAW_PROJECTED_PATHS,
        defaultValue: 'selected',
        description: 'Draw aircraft projected path',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'Always',
                value: 'always'
            },
            {
                displayLabel: 'Selected',
                value: 'selected'
            },
            {
                displayLabel: 'Never',
                value: 'never'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.SOFT_CEILING,
        defaultValue: 'yes',
        description: 'Allow departures via climb',
        help: 'Normally aircraft departs the airspace by flying beyond the horizontal bounds.  If set to yes, aircraft may also depart the airspace by climbing above it.',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'Yes',
                value: 'yes'
            },
            {
                displayLabel: 'No',
                value: 'no'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.MOUSE_CLICK_DRAG,
        defaultValue: 'right',
        description: 'Panning Button',
        help: 'Which mouse button (left or right) should drag the canvas when held',
        type: 'select',
        onChangeEventHandler: null,
        optionList: [
            {
                displayLabel: 'Left Click',
                value: 'left'
            },
            {
                displayLabel: 'Right Click',
                value: 'right'
            }
        ]
    },
    {
        name: GAME_OPTION_NAMES.RANGE_RINGS,
        defaultValue: 'default',
        description: 'Range rings',
        help: 'Radius of range rings, in nautical miles',
        type: 'select',
        onChangeEventHandler: EVENT.RANGE_RINGS_CHANGE,
        optionList: [
            {
                displayLabel: 'Default',
                value: 'default'
            },
            {
                displayLabel: 'Off',
                value: 'off'
            },
            {
                displayLabel: '1 nm',
                value: 1
            },
            {
                displayLabel: '2 nm',
                value: 2
            },
            {
                displayLabel: '5 nm',
                value: 5
            },
            {
                displayLabel: '10 nm',
                value: 10
            },
            {
                displayLabel: '15 nm',
                value: 15
            },
            {
                displayLabel: '20 nm',
                value: 20
            }
        ]
    }
];
