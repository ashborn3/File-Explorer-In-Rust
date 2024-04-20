# File Explorer in Rust

This project aims to provide a high-performance cross-platform file explorer built using Rust for backend logic and Tauri framework for the desktop application, with HTML, CSS, and JavaScript for the frontend interface.

## Features

- Cross-platform desktop application
- High-performance file searching CLI tool
- Utilizes hash maps and serialization/deserialization for efficient file searching
- Separate modules for handling hash maps, caching, and benchmarking collision rates
- Exponentially faster than Windows File Explorer's searching utility (approximately 105 times faster under specific conditions)
- Benchmarked to be at 100% faster than Linux utility `find` at various directory nesting levels
- Currently implementing concurrency to improve hashmap creation, reading, and serialization

## Technologies Used

- Rust
- Tauri framework
- HTML
- CSS
- JavaScript
- Git

## Performance Benchmark

- Hashmap collision rate benchmarked on a 512 GiB Drive: 2.34%

## Getting Started

- Install Rust from https://www.rust-lang.org/.
- Install Tauri from https://tauri.app/.
- Install Git by running `sudo apt install git` in the terminal.
- Clone the repository by running `git clone https://github.com/ashborn3/File-Explorer-In-Rust.git`.
- Move into the Project directory by running `cd File-Explorer-In-Rust`.
- To run the tauri project, run `cargo tauri dev` in the terminal.
- To utilize the Command Line Utility only, run 'cd scrutator`.
- To run the command line utility, run `cargo run <File Name>`.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Tauri + Vanilla

This template should help get you started developing with Tauri in vanilla HTML, CSS and Javascript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
