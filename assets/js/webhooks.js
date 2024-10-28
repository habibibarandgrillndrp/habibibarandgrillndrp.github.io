async function sendApp(ev) {
    ev.preventDefault();
    const Response1 = document
      .getElementById('Question1').value;
    const Response2 = document
      .getElementById('Question2').value;
    const Response3 = document
      .getElementById('Question3').value;
    const Response4 = document
      .getElementById('Question4').value;
    const Response5 = document
      .getElementById('Question5').value;
    const Response6 = document
      .getElementById('Question6').value;
    const Response7 = document
      .getElementById('Question7').value;
    const Response8 = document
      .getElementById('Question8').value;
    const Response9 = document
      .getElementById('Question9').value;
    const Response10 = document
      .getElementById('Question10').value;


    const webhookBody = {
      embeds: [{
        title: 'New Application',
        color: 0xFF0000,
        fields: [{
            name: 'First / Last Name',
            value: Response1
          },
          {
            name: 'Citizen ID(CSN)',
            value: Response2
          },
          {
            name: 'Phone Number',
            value: Response3
          },
          {
            name: 'Email(Discord Name)',
            value: Response4
          },
          {
            name: 'Your NDRP Website Name(Link works too)',
            value: Response5
          },
          {
            name: 'Your Time Zone',
            value: Response6
          },
          {
            name: 'What\'s the best way to reach you?',
            value: Response7
          },
          {
            name: 'Are you affiliated with any Gang/MC/Group?',
            value: Response8
          },
          {
            name: 'If Yes, What Gang/MC/Group?',
            value: Response9
          },
          {
            name: 'Anything you would like us to know?',
            value: Response10
          },
        ]
      }],
    };
    const webhookUrl = 'https://discord.com/api/webhooks/1225457094778683473/CfrZw-cBkyPOrcxa5Helxb4aIYJxVYVaGAyoU7bqcq98MuiQ0YAGabHybUOr5U4BLm4N';
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
    });
    location.reload();
  }


  async function sendEventbooking(ev) {
    ev.preventDefault();

    const Response1 = document.getElementById('Question1').value;
    const Response2 = document.getElementById('Question2').value;
    const Response3 = document.getElementById('Question3').value;
    const Response4 = document.getElementById('Question4').value;
    const Response5 = document.getElementById('Question5').value;
    const datetimeValue = document.getElementById('Question6').value;
    const Response7 = document.getElementById('Question7').value;
    const Response8 = document.getElementById('Question8').value;
    const Response9 = document.getElementById('Question9').value;
    const Response10 = document.getElementById('Question10').value;
    const Response11 = document.getElementById('Question11').value;
    const dateObject = new Date(datetimeValue);
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timestamp = Math.floor(dateObject.getTime() / 1000);
    const discordTimestamp = `<t:${timestamp}:F>`; 


    const webhookBody = {
        embeds: [{
            title: 'Event Booking Request',
            color: 0xFF0000,
            fields: [{
                name: 'First / Last Name',
                value: Response1 
            },
            {
                name: 'Citizen ID(CSN)',
                value: Response2
            },
            {
                name: 'Email(Discord Name)',
                value: Response3
            },
            {
                name: 'Phone Number',
                value: Response4
            },
            {
                name: 'Bank Number',
                value: Response5
            },
            {
                name: 'Date and time (your local time for it)',
                value: discordTimestamp 
            },
            {
                name: 'Location',
                value: Response7
            },
            {
                name: 'Approximate Number of People',
                value: Response8
            },
            {
                name: 'Duration',
                value: Response9
            },
            {
                name: 'Do you want a Food Trunk, Delivery or Pick Up',
                value: Response10
            },
            {
                name: 'Any Info That Will Help',
                value: Response11
            },
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1299729017724866590/Xx_8S3BTi-3Gq8tBsCRgD_IJHCVnV6I21hHDC4k9nkXji_iJ-vVeRMKQG4_Ejy5vJ2UT';
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });
    
    location.reload();
}

