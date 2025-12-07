import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import * as En from 'blockly/msg/en';
import { defineBlocks } from '../blocks/custom_blocks';
import { cs2Generator } from '../generators/cs2';

Blockly.setLocale(En);

const BlocklyEditor = ({ onCodeChange }) => {
    const blocklyDiv = useRef(null);
    const workspace = useRef(null);

    useEffect(() => {
        defineBlocks();

        // Define the toolbox
        const toolbox = {
            kind: 'categoryToolbox',
            contents: [
                {
                    kind: 'category',
                    name: 'Binds',
                    colour: '#5ba55b',
                    contents: [
                        { kind: 'block', type: 'cs2_bind' },
                        { kind: 'block', type: 'cs2_command_string' },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Viewmodel',
                    colour: '#5ba58c',
                    contents: [
                        { kind: 'block', type: 'cs2_viewmodel_fov' },
                        { kind: 'block', type: 'cs2_viewmodel_offset_x' },
                        { kind: 'block', type: 'cs2_viewmodel_offset_y' },
                        { kind: 'block', type: 'cs2_viewmodel_offset_z' },
                        { kind: 'block', type: 'cs2_viewmodel_presetpos' },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Radar & HUD',
                    colour: '#5b8ca5',
                    contents: [
                        { kind: 'block', type: 'cs2_radar_scale' },
                        { kind: 'block', type: 'cs2_radar_always_centered' },
                        { kind: 'block', type: 'cs2_hud_scale' },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Gameplay',
                    colour: '#a58c5b',
                    contents: [
                        { kind: 'block', type: 'cs2_sensitivity' },
                        { kind: 'block', type: 'cs2_volume' },
                        { kind: 'block', type: 'cs2_fps_max' },
                        { kind: 'block', type: 'cs2_zoom_sensitivity' },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Logic & Aliases',
                    colour: '#5b67a5',
                    contents: [
                        { kind: 'block', type: 'cs2_alias' },
                        { kind: 'block', type: 'cs2_command_stmt' },
                    ],
                },
                {
                    kind: 'category',
                    name: 'Pro Scripts',
                    colour: '#a55b80',
                    contents: [
                        { kind: 'block', type: 'cs2_jumpthrow' },
                    ],
                },
            ],
        };

        workspace.current = Blockly.inject(blocklyDiv.current, {
            toolbox: toolbox,
            scrollbars: true,
            trashcan: true,
            grid: {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true,
            },
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
            },
            renderer: 'zelos',
        });

        const updateCode = () => {
            const code = cs2Generator.workspaceToCode(workspace.current);
            onCodeChange(code);
        };

        workspace.current.addChangeListener(updateCode);

        return () => {
            if (workspace.current) {
                workspace.current.dispose();
            }
        };
    }, []);

    return (
        <div
            ref={blocklyDiv}
            className="w-full h-full"
            style={{ minHeight: '600px' }}
        />
    );
};

export default BlocklyEditor;
