<script>
  import About from "./About/index.svelte";
  import Gallery from "./Gallery/index.svelte";
  import Teaching from "./Teaching/index.svelte";
  import Research from "./Research/index.svelte";
</script>

<div class="App">
  <div class="header">
    <div class="nav nav-left">
      <div class="nav-title current" role="button" tabindex="0">About</div>
      <div class="nav-title">
        <a
          href="https://docs.google.com/document/d/11NbAQDnSe4KxdwbF0kjj-Ydr33-4Q45SG0SCBXwobaQ/edit?usp=sharing"
        >
          CV
        </a>
      </div>
    </div>
    <div class="header-name" role="button" tabindex="0">MARY BETH KERY</div>
    <div class="nav nav-right">
      <div class="nav-title">
        <a
          href="https://scholar.google.com/citations?user=KR8gY5kAAAAJ&hl=en&oi=ao"
        >
          Google Scholar
        </a>
      </div>
      <div class="nav-title">
        <a href="https://github.com/mkery"> Github </a>
      </div>
    </div>
  </div>
  <div class="subtitle">
    {"/* Designing & developing futures of programming */"}
  </div>
  <div class="subtitle" />
  <About />
  <Research/>
  <Teaching/>
  <Gallery/>
  <footer>Mary Beth Kery 2020 all rights reserved</footer>
</div>
