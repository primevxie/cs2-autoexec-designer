import * as Blockly from 'blockly/core';

const blocks = [
    // --- Original Blocks ---
    {
        "type": "cs2_bind",
        "message0": "Bind Key %1 to Command %2",
        "args0": [
            { "type": "field_input", "name": "KEY", "text": "v" },
            { "type": "input_value", "name": "COMMAND", "check": "String" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Bind a key to a command"
    },
    {
        "type": "cs2_command_string",
        "message0": "Command %1",
        "args0": [
            { "type": "field_input", "name": "CMD", "text": "+jump" }
        ],
        "output": "String",
        "colour": 160,
        "tooltip": "A raw command string like +jump or buy ak47"
    },
    {
        "type": "cs2_alias",
        "message0": "Alias Name %1 %2 Commands %3",
        "args0": [
            { "type": "field_input", "name": "NAME", "text": "my_script" },
            { "type": "input_dummy" },
            { "type": "input_statement", "name": "STACK" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Create a custom alias"
    },
    {
        "type": "cs2_command_stmt",
        "message0": "Run %1",
        "args0": [
            { "type": "field_input", "name": "CMD", "text": "+jump" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "A command to run"
    },
    {
        "type": "cs2_jumpthrow",
        "message0": "Jump Throw (Alias)",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 290,
        "tooltip": "Creates the necessary alias and bind for a jump throw"
    },

    // --- Viewmodel Blocks ---
    {
        "type": "cs2_viewmodel_fov",
        "message0": "Viewmodel FOV %1",
        "args0": [
            { "type": "field_number", "name": "FOV", "value": 68, "min": 54, "max": 68 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 40,
        "tooltip": "Sets viewmodel_fov (54-68)"
    },
    {
        "type": "cs2_viewmodel_offset_x",
        "message0": "Viewmodel Offset X %1",
        "args0": [
            { "type": "field_number", "name": "OFFSET", "value": 2.5, "min": -2.5, "max": 2.5, "precision": 0.1 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 40,
        "tooltip": "Sets viewmodel_offset_x (-2.5 to 2.5)"
    },
    {
        "type": "cs2_viewmodel_offset_y",
        "message0": "Viewmodel Offset Y %1",
        "args0": [
            { "type": "field_number", "name": "OFFSET", "value": 0, "min": -2.0, "max": 2.0, "precision": 0.1 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 40,
        "tooltip": "Sets viewmodel_offset_y (-2.0 to 2.0)"
    },
    {
        "type": "cs2_viewmodel_offset_z",
        "message0": "Viewmodel Offset Z %1",
        "args0": [
            { "type": "field_number", "name": "OFFSET", "value": -1.5, "min": -2.0, "max": 2.0, "precision": 0.1 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 40,
        "tooltip": "Sets viewmodel_offset_z (-2.0 to 2.0)"
    },
    {
        "type": "cs2_viewmodel_presetpos",
        "message0": "Viewmodel Preset %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "PRESET",
                "options": [
                    ["Desktop (1)", "1"],
                    ["Couch (2)", "2"],
                    ["Classic (3)", "3"]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 40,
        "tooltip": "Sets viewmodel_presetpos"
    },

    // --- Radar Blocks ---
    {
        "type": "cs2_radar_scale",
        "message0": "Radar Scale %1",
        "args0": [
            { "type": "field_number", "name": "SCALE", "value": 0.7, "min": 0.25, "max": 1.0, "precision": 0.05 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 200,
        "tooltip": "Sets cl_radar_scale"
    },
    {
        "type": "cs2_radar_always_centered",
        "message0": "Radar Always Centered %1",
        "args0": [
            { "type": "field_checkbox", "name": "CENTERED", "checked": true }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 200,
        "tooltip": "Sets cl_radar_always_centered"
    },
    {
        "type": "cs2_hud_scale",
        "message0": "HUD Scale %1",
        "args0": [
            { "type": "field_number", "name": "SCALE", "value": 1.0, "min": 0.5, "max": 1.1, "precision": 0.05 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 200,
        "tooltip": "Sets hud_scaling"
    },

    // --- Gameplay Blocks ---
    {
        "type": "cs2_sensitivity",
        "message0": "Sensitivity %1",
        "args0": [
            { "type": "field_number", "name": "SENS", "value": 1.0, "min": 0.01, "precision": 0.01 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Sets sensitivity"
    },
    {
        "type": "cs2_fps_max",
        "message0": "Max FPS %1",
        "args0": [
            { "type": "field_number", "name": "FPS", "value": 400, "min": 0, "precision": 1 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Sets fps_max"
    },
    {
        "type": "cs2_volume",
        "message0": "Volume %1",
        "args0": [
            { "type": "field_number", "name": "VOL", "value": 1.0, "min": 0, "max": 1.0, "precision": 0.01 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Sets volume"
    },
    {
        "type": "cs2_zoom_sensitivity",
        "message0": "Zoom Sensitivity %1",
        "args0": [
            { "type": "field_number", "name": "ZOOM", "value": 1.0, "min": 0.1, "precision": 0.01 }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Sets zoom_sensitivity_ratio"
    }
];

export const defineBlocks = () => {
    Blockly.common.defineBlocksWithJsonArray(blocks);
};
