<template>
  <div>
    <img src="/img/02.png" class="decor02" />
    <img src="/img/03.png" class="decor01" />

    <div class="main-content">
      <img src="/img/01.png" class="nameplate" />
      <div class="button-container">
        <button><img src="/img/0b1.png" class="button" /></button>
        <button><img src="/img/0b2.png" class="button" /></button>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --lightmode_primary: #f1eee4;
  --lightmode_secondary: #e8e4d9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--lightmode_primary);
}

.main-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  z-index: 1000;
  padding: 20px;
  width: 100%;
  max-width: 1100px;
}

.nameplate {
  width: 100%;
  max-width: 1053px;
  height: auto;
}

.decor02 {
  position: absolute;
  top: 0;
  left: 0;
  width: min(800px, 35vw);
  z-index: 500;
}

.decor01 {
  position: absolute;
  bottom: 0;
  right: 0;
  width: min(800px, 35vw);
  z-index: 500;
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.button-container button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    filter 0.15s ease;
}

.button-container button:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.button-container button:active {
  transform: scale(0.95);
  filter: brightness(0.9);
}

.button {
  width: clamp(150px, 40vw, 400px);
  height: auto;
  display: block;
}

/* Tablet */
@media (max-width: 768px) {
  .main-content {
    gap: 25px;
  }

  .decor02,
  .decor01 {
    width: 30vw;
  }

  .button-container {
    gap: 15px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .main-content {
    gap: 20px;
    padding: 15px;
  }

  .decor02,
  .decor01 {
    width: 40vw;
    opacity: 0.5;
  }

  .button-container {
    flex-direction: column;
    gap: 12px;
  }

  .button {
    width: clamp(180px, 60vw, 280px);
  }
}

/* Small mobile */
@media (max-width: 360px) {
  .decor02,
  .decor01 {
    display: none;
  }

  .button {
    width: 70vw;
  }
}
</style>
