<?php snippet('header') ?>

  <main class="main" role="main">
<section class="project-content">
    <header class="wrap">
      <h1><?= $page->title()->html() ?></h1>

    </header>

    <div class="text wrap">

      <?= $page->text()->kirbytext() ?>

      <div class="container">
      <div class="floatleft">
  <?php
  $videos = array(
    $page->videos()->find('trek_1.mp4'),
  );
  snippet('video', array(
    'videos' => $videos,
  ));
  ?>
      </div>
      <p class="textfloat">
      Users can easily browse, save, and attend treks, which are limited to 6 people to create an intimate and easy experience.
      </p>
      </div>
      <p class="cf"></p>


      <div class="container">
      <div class="floatleft">
  <?php
  $videos = array(
    $page->videos()->find('trek_2.mp4'),
  );
  snippet('video', array(
    'videos' => $videos,
  ));
  ?>
      </div>
      <p class="textfloat">
      Upcoming, saved, and past treks are stored in your profile. Connect with other people from your trek by using the chat.
      </p>
      </div>
      <p class="cf"></p>

    <div class="container">
    <div class="floatleft">
    <?php
    $image = $page->images()->find('trek_3.png')?>
    <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
    </div>
    <p class="textfloat">
    Type in any search term or search treks by category.
    </p>
    </div>
    <p class="cf"></p>

    <div class="container">
    <div class="floatleft">
    <?php
    $image = $page->images()->find('trek_4.png')?>
    <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
    </div>
    <p class="textfloat">
    Anyone can create a trek.
    </p>
    </div>
    <p class="cf"></p>

<div class="textcontainer">
    <h4>Further Development</h4>
These are initial mockups and would benefit from further development through user tests and research. Some other ideas to explore are:<br /><br />
The usage of "tour guides" rather than a regular host, where users could create small tours and get paid<br /><br />
A rating system for hosts/guides/travelers<br /><br />
A more sophisticated system of features for different types of users (a tour guide, regular host, or traveler
</div>

    <h4>Wireframe</h4>
    <?php
    $image = $page->images()->find('sketch_1.jpg')?>
    <img src="<?= $image->url() ?>" alt="<?= $page->title()->html() ?>" />
    </div>

    <div class="containerprocess">
      <h4>Process:</h4>
    individual project<br />
    user interviews<br />
    brainstorm<br />
    user requirements<br />
    wireframe<br />
    visual design<br />
    prototype (Sketch and Origami Studio)<br />
    </div>

</section>
  </main>

<?php snippet('footer') ?>
