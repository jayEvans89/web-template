
<script lang="ts">
  let { children } = $props();
</script>

<h1>Admin pages</h1>

<div>
  <aside>
    <nav>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/admin/users">Users</a>
        </li>
      </ul>
    </nav>
  </aside>
</div>

{@render children()}