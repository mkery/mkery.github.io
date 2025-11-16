<script>
  import Video from './Video.svelte';
  import Portfolio from './Portfolio.svelte';
</script>

<div class="artGallery">
  <Video>
    <iframe
      slot="content"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/G3v5T1B2ZDU"
      frameborder="0"
      title="Milk Junior"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <div slot="desc">
      Milk Junior is an animated short about a very poor svg rendering algorithm named milk junior who is struggling with a fear that he is stupider than everyone else. Created in a HTML Canvas using stupid algorithms [by me]!
    </div>
  </Video>
  <Video>
    <iframe
      slot="content"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/FzB3PDggMhI"
      frameborder="0"
      title="Dancers"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <div slot="desc">
      A film created with hand-drawn animation processed through a pix2pix model trained on dancers from CMU Panoptic dataset. Late night art project collaboration for an Art & ML class with Ken Holstein and Lea Albaugh.
    </div>
  </Video>
  <Video>
    <iframe
      slot="content"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/i9QT7wh9-Hg"
      frameborder="0"
      title="Putti"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <div slot="desc">
      Putti: Post-Human Art Crawl is a web game prototype that lets you explore the world of art history by walking within paintings. Based on depth detection from still paintings and open-source art archives. Collaboration with Ken Holstein.
    </div>
  </Video>
  <Portfolio />
</div>
