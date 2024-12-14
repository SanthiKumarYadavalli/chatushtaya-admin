import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { fetchContacts, updateContact } from "../../backend/utils";

// Component to Display All Contacts
function AllContacts({ contacts, setSelectedContact }) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      {contacts.map((contact, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{contact.title}</Typography>
            <Typography>{contact.description}</Typography><br />
            <Typography>WhatsApp: {contact.whatsapp}</Typography>
            <Typography>Email: {contact.email}</Typography>
            <Typography>Mobile: {contact.phoneNumber}</Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSelectedContact({ ...contact, index })}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

// Component to Edit Selected Contact
function ContactDetails({ contact, onBack, onSave }) {
  const [editedContact, setEditedContact] = useState(contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedContact);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Edit Contact
      </Typography>

      <TextField
        label="Title"
        name="title"
        value={editedContact.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="WhatsApp"
        name="whatsapp"
        value={editedContact.whatsapp}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Email"
        name="email"
        value={editedContact.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Mobile"
        name="mobile"
        value={editedContact.phoneNumber}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 1 }}>
          Save
        </Button>
        <Button variant="outlined" color="secondary" onClick={onBack}>
          Back
        </Button>
      </Box>
    </Box>
  );
}

// Main Contacts Page Component
export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchAllContacts() {
      const contacts = await fetchContacts();
      setContacts(contacts);
    }
    fetchAllContacts();
  }, []);

  const [selectedContact, setSelectedContact] = useState(null);

  const handleSave = (updatedContact) => {
    async function updateSelectedContact() {
      await updateContact(selectedContact.id, updatedContact);
      setContacts(await fetchContacts());
    }
    updateSelectedContact();
    setSelectedContact(null);
  };

  return (
    <Box>
      {selectedContact ? (
        <ContactDetails
          contact={selectedContact}
          onBack={() => setSelectedContact(null)}
          onSave={handleSave}
        />
      ) : (
        <AllContacts contacts={contacts} setSelectedContact={setSelectedContact} />
      )}
    </Box>
  );
}
