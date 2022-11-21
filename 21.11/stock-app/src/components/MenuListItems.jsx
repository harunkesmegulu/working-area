




<List>
{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
))}
</List>