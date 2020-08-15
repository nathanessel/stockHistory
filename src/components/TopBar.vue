<template>
<div class="topbar-container">
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#">Dashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
			<b-form-input size="sm" class="mr-sm-2" placeholder="Username"></b-form-input>
			<b-form-input size="sm" class="mr-sm-2" placeholder="Password"></b-form-input>
			<b-button size="sm" class="my-2 my-sm-0 nav-button" type="submit">Login</b-button>
			<b-button v-b-modal.modal-1 size="sm" class="my-2 my-sm-0 nav-button">Register</b-button>
			<b-modal id="modal-1" title="BootstrapVue">
				<p class="my-4">Hello from modal!</p>
			</b-modal>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
