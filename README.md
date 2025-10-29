# 🌀 Tic-Tac-Toe Game

A fun and interactive **Tic-Tac-Toe** game built using **HTML, CSS & JavaScript**.  
Play against another person and enjoy the classic 3×3 grid game right in your browser.

---

## 🎮 Features

- Two-player mode with alternating turns.  
- Input fields for **Player 1** and **Player 2** names.  
- Visual highlight to show whose turn it is.  
- Detects win or draw conditions automatically.  
- One-line highlight appears across the winning path when someone wins.  
- Clean and simple UI, easy to understand and modify.

---

## 🧰 Technologies Used

- **HTML5** — for the markup and structure.  
- **CSS3** — for styling, layout and animations (winning line).  
- **JavaScript (vanilla)** — for game logic, event handling, DOM manipulation.

---

## 🚀 Getting Started

### Prerequisites  
You just need a modern web browser. No special installation required.

### How to run  
```bash
# Clone the repository
git clone https://github.com/HariomGundale/Tic-Tac-Toe.git

# Navigate into project folder
cd Tic-Tac-Toe

```


## 📁 Project Structure

```plaintext
Tic-Tac-Toe/
│
├── index.html        # Main HTML file
├── style.css         # CSS styling and layout
├── script.js         # Game logic and interactivity
└── assets/           # (Optional) Images or icons used in the UI
```

## 🧠 How It Works

1. Players enter their names (Player 1 and Player 2).

2. Player 1 (X) starts. The UI highlights Player 1’s name to show turn.

3. Player clicks a cell (empty) to place their mark (X or O).

4. After each move the script checks:

     - If a win condition is met → the game ends, winning line is drawn across the path, win message displayed.

     - If no empty cells left and no win → it’s a draw.

     - If no empty cells left and no win → it’s a draw.

5. A Restart button clears the board, resets turns, removes highlight/line, and allows fresh play.

## 👤 Author

Hariom Gundale

If you like this project, please ⭐ star the repository and share it with your friends!