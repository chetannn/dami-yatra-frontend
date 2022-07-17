<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Annapurna Trek
    </hero-bar>
    <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://static.toiimg.com/photo/67321906/kathmandu.jpg?width=748&resize=4" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-3">
              <b-icon
              icon="star-circle"
              size="is-small">
            </b-icon> Overview</p>
            <p class="subtitle is-6">Annapurna Trekking Highlights</p>
          </div>
        </div>

        <div class="content">
          Nepal is a beautiful country which has a rich culture and amazing history. It is a landlocked country which lies between the giant nations India and China. The country provides an excellent opportunity for travelers and tourists to explore it's natural and cultural beauty and have peace of mind. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>

        </div>
      </div>
    </div>
    </section>
    <section>
      <div class="card">
        <div class="card-content">
          <p class="title is-3">
            <b-icon
              icon="star-circle"
              size="is-small">
            </b-icon>
            Highlights</p>
          <div class="media">
            <div class="media-content">
              <p class="title is-4">
                <b-icon
                icon="calendar"
                size="is-small">
              </b-icon> Duration</p>
              <p class="subtitle is-6">10 Night 5 Days</p>
            </div>

            <div class="media-content">
              <p class="title is-4">
                <b-icon
                  icon="ticket"
                  size="is-small">
                </b-icon> Activities</p>
              <p class="subtitle is-6">
              <ul>
              <li>Dancing</li>
              <li>Dancing</li>
              </ul>
              </p>

            </div>
            <div class="media-content">
              <p class="title is-4">
                <b-icon
                icon="bed-king"
                size="is-small">
              </b-icon> Accomodations</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
            <div class="media-content">

              <p class="title is-4">
                <b-icon
                icon="food"
                size="is-small">
              </b-icon> Meals</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
            <div class="media-content">

              <p class="title is-4">
                <b-icon
                  icon="hiking"
                  size="is-small">
                </b-icon> Date</p>
              <p class="subtitle is-6"> <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
            </div>

          </div>



        </div>
      </div>
    </section>
    <section>

      <div class="card ">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <div class="columns is-centered">
                <div class="card">
                  <b-button type="is-primary"><strong>Itinerary</strong><p class="subtitle is-7 is-centered" style="color:white">Press here to download</p></b-button>
                  <b-button type="is-danger"><strong>Buy Package</strong><p class="subtitle is-7 is-centered" style="color:white">Hurry Up! 2 Left !</p></b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section is-main-section" >
      <div class="column">
        <p class="title is-3">
          <b-icon
          icon="star-circle"
          size="is-small">
        </b-icon> Quick Enquiry</p>
      <b-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
        <b-input name="subject" expanded></b-input>
      </b-field>

      <b-field horizontal label="From">
        <b-input name="name" placeholder="Name" expanded></b-input>
        <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
      </b-field>

      <b-field horizontal label="Topic">
        <b-select placeholder="Select a topic">
          <option value="inquiry">Inquiry</option>
          <option value="complain">Complain</option>
          <option value="other">Other</option>
        </b-select>
      </b-field>

      <b-field horizontal label="Message">
        <b-input type="textarea"></b-input>
      </b-field>

      <b-field horizontal><!-- Label left empty for spacing -->
        <p class="control">
          <b-button label="Send message" type="is-primary" />
        </p>
      </b-field>
      </div>
    </section>
    <section>

      <section>
        <div class="section is-main-section">
        <p class="title is-3">
          <b-icon
            icon="star-circle"
            size="is-small">
          </b-icon> Discussions</p>
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                <br>
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>

            <article class="media">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Sean Brown</strong>
                    <br>
                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                    <br>
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </div>

                <article class="media">
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                </article>

                <article class="media">
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                </article>
              </div>
            </article>

            <article class="media">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br>
                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                    <br>
                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>

        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="Add a comment..."></textarea>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button">Post comment</button>
              </p>
            </div>
          </div>
        </article>
        </div>
      </section>
      <footer class="section">
        <div class="container">
          <div class="columns is-multiline content has-text-centered" style="border-bottom: 1px solid #dee2e6;background-color: white">
            <div class="column is-12 content has-text-centered">
              <a class="mb-4 is-inline-block" href="#">
                <img class="image" src="bulma-plain-assets/logos/plainb-logo.svg" alt="" width="96px">
              </a>
              <p class="has-text-grey-dark mb-6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="buttons is-centered">
                <a class="button is-primary is-inverted" href="#">About Us </a>
                <a class="button is-primary is-inverted" href="#">Login</a>
                <a class="button is-primary is-inverted" href="#">Registration</a>
                <a class="button is-primary is-inverted" href="#"></a>
              </div>
              <div>
                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="instagram"
                    size="is-medium"
                    type="is-primary">
                  </b-icon>
                </a>
                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="git"
                    size="is-medium"
                    type="is-primary">
                  </b-icon>
                </a>
                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="facebook"
                    size="is-medium"
                    type="is-primary">
                  </b-icon>
                </a>
                <a class="mr-3 is-inline-block" href="#">
                  <b-icon
                    icon="linkedin"
                    size="is-medium"
                    type="is-primary">
                  </b-icon>
                </a>
                <a class="is-inline-block" href="#">
                  <b-icon
                    icon="twitter"
                    size="is-medium"
                    type="is-primary">
                  </b-icon>
                </a>
              </div>
            </div>
          </div>
          <div class="pt-5 has-text-centered">
            <p>All rights reserved © Dami Yatra 2022</p>
          </div>
        </div>
      </footer> <!-- this is where the footer end-->
    </section>
  </div>

</template>


<script>
export default {
  middleware: ['auth', 'verified', 'customer'],
  layout: 'customer'
}
</script>

<style scoped>

</style>
