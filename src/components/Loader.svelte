<style>
  .Loader {
    display: grid;
    place-items: center;
    height: 80vh;
  }

  .Loader-container {
    border: 8px solid white;
    border-radius: 50%;
    border-top-color: #999;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="Loader">
  <div class="Loader-container"></div>
</div>