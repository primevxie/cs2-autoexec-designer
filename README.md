# CS2 Autoexec Designer 🎮

A visual, block-based editor for creating **Counter-Strike 2** `autoexec.cfg` files. Built with **React**, **Blockly**, and **TailwindCSS**.

## 🚀 Features

*   **Visual Logic**: Drag-and-drop interface powered by Google's Blockly.
*   **Live Code Generation**: See your `.cfg` file update in real-time.
*   **Pro Presets**:
    *   **Jump Throw**: Perfect consistency for nades.
    *   **Null Binds**: (Coming soon/Customizable)
*   **Extensive Customization**:
    *   **Viewmodel**: Adjust FOV and X/Y/Z offsets visually.
    *   **Radar**: Scale and center your minimap.
    *   **Gameplay**: Sensitivity, Volume, Max FPS, and more.
*   **Safe**: Generates standard Valve Console commands. 100% VAC safe.

## 🛠️ Installation & Usage

1.  **Clone the repository**
    ```bash
    git clone https://github.com/StartYourOwnRepo/cs2-autoexec-designer.git
    cd cs2-autoexec-designer
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Locally**
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:5173`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🧩 Block Categories

*   **Binds**: Map keys to commands.
*   **Viewmodel**: Fine-tune specific offsets.
*   **Radar & HUD**: Optimize your UI advantage.
*   **Gameplay**: Essential competitive settings.
*   **Logic & Aliases**: Create complex toggle scripts and meta-binds.
*   **Pro Scripts**: Pre-configured utility scripts.

## 🤝 Contributing

Pull requests are welcome! If you want to add a new "Pro Script" block, check out `src/blocks/custom_blocks.js` and `src/generators/cs2.js`.

## 📜 License

MIT
