import "./App.css";
import Api from "./Api.js";

function App() {
  return (
    <div className="App">
      <header>
        <img src="img/pokeflex logo.png" alt="Pokeflex Logo" class="logo" />
      </header>
      <div id="gameContainer">
        <div class="player" id="player1">
          <img src="img/ethan.png" alt="Player 1 Profile Picture" />
          <p>Joueur 1</p>
          <div class="heartcontainer">
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
          </div>
          <p>W/L</p>
          <p>W: 9</p>
          <p>L: 3</p>
        </div>
        <div class="pokemon">
          <div class="previous_pokemon_container">
            <div class="pokemon_sprite_container">
              <img
                class="pokemon_sprite"
                src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/8/84/Pokemans_392.gif"
                alt="Infernape"
              />
            </div>
            <div class="pokemon_name">INFERNAPE</div>
            <div class="type_container">
              <span>
                <img
                  class="previous_type_png_first"
                  src="https://archives.bulbagarden.net/media/upload/thumb/3/35/FightingIC_BDSP.png/105px-FightingIC_BDSP.png"
                  alt="FIGHTING element"
                />
              </span>
              <span>
                <img
                  class="previous_type_png_second"
                  src="https://archives.bulbagarden.net/media/upload/thumb/b/b1/FireIC_BDSP.png/105px-FireIC_BDSP.png"
                  alt="FIRE element"
                />
              </span>
            </div>
            <span class="pokemon_number_id">#0392</span>
          </div>
          <hr />
          <div class="answer_input_container">
            <div class="input_label">
              <p class="instruction_game">
                ENTER A
                <span>
                  <img
                    class="type_png"
                    src="https://archives.bulbagarden.net/media/upload/thumb/3/35/FightingIC_BDSP.png/105px-FightingIC_BDSP.png"
                    alt="FIGHTING element"
                  />
                </span>
                OR
                <span>
                  <img
                    class="type_png"
                    src="https://archives.bulbagarden.net/media/upload/thumb/b/b1/FireIC_BDSP.png/105px-FireIC_BDSP.png"
                    alt="FIRE element"
                  />
                </span>
                TYPE POKEMON
              </p>
            </div>
            <div class="input_inline">
              <input id="answer" type="text" />
              <button class="submit_button">submit</button>
            </div>
          </div>
        </div>
        <div class="player" id="player2">
          <img src="img/player 2.png" alt="Player 2 Profile Picture" />
          <p>Joueur 2</p>
          <div class="heartcontainer">
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
            <img class="heart" src="img/heart.png" alt="1 full heart" />
          </div>
          <p>W/L</p>
          <p>W: 9</p>
          <p>L: 3</p>
        </div>
      </div>
      <div class="buttons">
        <button class="game_button">reboot</button>
        <button class="game_button">start</button>
      </div>
    </div>
  );
}

export default App;
