# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [2.0.4] - 2023-11-09

### Added

- Implemented a border for the title bar.
- Added distinct background and foreground colors for the title bar when the window is unfocused/inactive, previously it was the same.

### Changed

- Comments now have italic styling to differentiate them more clearly.
- Introduced a new, subtler color to distinguish files and folders that are ignored by git (`.gitignore`).


## [2.0.3] - 2023-10-20

### Changed

- Changed the border color of the widgets.

## [2.0.2] - 2023-10-20

### Changed

- Changed the border color of the activity bar.
- Changed the background colors of the widgets.

## [2.0.1] - 2023-10-18

### Fixed

- Resolved color discrepancies between .ts and .js files.

### Changed

- Adjusted the color for variable.other.readwrite when defining an object.

## [2.0.0] - 2023-10-18

### Changed

- Disabled semanticHighlighting across all theme variations.
- Renamed the theme variations for clarity and consistency.

### Added

- Introduced a new variation named "Titan," also inspired by the Dracula theme.

## [1.1.0] - 2023-06-26

### Fixed

- React component props that were destructured and renamed were previously colored incorrectly, but have been fixed to be white as they should be.
- The colors for both export readwrite and import readwrite were incorrect and have been corrected to be white.

### Changed

- Decreased saturation of tokensColors in accordance with the increase in theme variation (I, II, III...)

## [1.0.3] - 2023-06-26

### Fixed

- Fixed an issue that was causing TypeScript parameter types to appear orange.

## [1.0.2] - 2023-06-26

### Fixed

- Fixed an issue causing properties like .length to appear incorrectly.
- Resolved an issue where variables turned white when loading the theme.

### Changed

- Replaced the smaller logo with a larger one for better visibility.

## [1.0.1] - 2023-06-25

### Changed

- Updated README with new installation instructions and screenshots.

## [1.0.0] - 2023-06-24

### Added

- Initial release of #Vlad theme for Visual Studio Code.
- Support for highlight colors in JavaScript/TypeScript.
