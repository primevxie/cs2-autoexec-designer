import { Generator } from 'blockly/core';

export const cs2Generator = new Generator('CS2');

cs2Generator.ORDER_ATOMIC = 0;
cs2Generator.ORDER_NONE = 99;

cs2Generator.scrub_ = function (block, code, opt_thisOnly) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    const nextCode = opt_thisOnly ? '' : cs2Generator.blockToCode(nextBlock);
    return code + nextCode;
};

// --- Original Generators ---
cs2Generator.forBlock['cs2_bind'] = function (block) {
    const key = block.getFieldValue('KEY');
    const command = cs2Generator.valueToCode(block, 'COMMAND', cs2Generator.ORDER_ATOMIC) || '""';
    const cleanCommand = command.startsWith('(') ? command.slice(1, -1) : command;
    return `bind "${key}" ${cleanCommand}\n`;
};

cs2Generator.forBlock['cs2_command_string'] = function (block) {
    const code = block.getFieldValue('CMD');
    return [`"${code}"`, cs2Generator.ORDER_ATOMIC];
};

cs2Generator.forBlock['cs2_alias'] = function (block) {
    const name = block.getFieldValue('NAME');
    const statements_stack = cs2Generator.statementToCode(block, 'STACK');
    // Escape existing double quotes in the command list to avoid nested quote syntax errors
    const cmdList = statements_stack.trim().replace(/"/g, '\\"').replace(/\n/g, ';');
    return `alias "${name}" "${cmdList}"\n`;
};

cs2Generator.forBlock['cs2_command_stmt'] = function (block) {
    const cmd = block.getFieldValue('CMD');
    return `${cmd}\n`;
};

cs2Generator.forBlock['cs2_jumpthrow'] = function (block) {
    const code = `
alias "+jumpaction" "+jump;"
alias "+throwaction" "-attack; -attack2"
alias "-jumpaction" "-jump"
bind "v" "+jumpaction; +throwaction"
`;
    return code.trim() + '\n';
};

// --- Viewmodel Generators ---
cs2Generator.forBlock['cs2_viewmodel_fov'] = function (block) {
    const fov = block.getFieldValue('FOV');
    return `viewmodel_fov ${fov}\n`;
};

cs2Generator.forBlock['cs2_viewmodel_offset_x'] = function (block) {
    const val = block.getFieldValue('OFFSET');
    return `viewmodel_offset_x ${val}\n`;
};

cs2Generator.forBlock['cs2_viewmodel_offset_y'] = function (block) {
    const val = block.getFieldValue('OFFSET');
    return `viewmodel_offset_y ${val}\n`;
};

cs2Generator.forBlock['cs2_viewmodel_offset_z'] = function (block) {
    const val = block.getFieldValue('OFFSET');
    return `viewmodel_offset_z ${val}\n`;
};

cs2Generator.forBlock['cs2_viewmodel_presetpos'] = function (block) {
    const val = block.getFieldValue('PRESET');
    return `viewmodel_presetpos ${val}\n`;
};

// --- Radar Generators ---
cs2Generator.forBlock['cs2_radar_scale'] = function (block) {
    const val = block.getFieldValue('SCALE');
    return `cl_radar_scale ${val}\n`;
};

cs2Generator.forBlock['cs2_radar_always_centered'] = function (block) {
    const isCentered = block.getFieldValue('CENTERED') === 'TRUE';
    return `cl_radar_always_centered ${isCentered ? '1' : '0'}\n`;
};

cs2Generator.forBlock['cs2_hud_scale'] = function (block) {
    const val = block.getFieldValue('SCALE');
    return `hud_scaling ${val}\n`;
};

// --- Gameplay Generators ---
cs2Generator.forBlock['cs2_sensitivity'] = function (block) {
    const val = block.getFieldValue('SENS');
    return `sensitivity ${val}\n`;
};

cs2Generator.forBlock['cs2_fps_max'] = function (block) {
    const val = block.getFieldValue('FPS');
    return `fps_max ${val}\n`;
};

cs2Generator.forBlock['cs2_volume'] = function (block) {
    const val = block.getFieldValue('VOL');
    return `volume ${val}\n`;
};

cs2Generator.forBlock['cs2_zoom_sensitivity'] = function (block) {
    const val = block.getFieldValue('ZOOM');
    return `zoom_sensitivity_ratio ${val}\n`;
};
