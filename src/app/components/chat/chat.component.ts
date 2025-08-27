import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Talk from 'talkjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit {
  role!: 'client' | 'support';

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.role = this.route.snapshot.paramMap.get('role') as 'client' | 'support';

    Talk.ready.then(() => {
      const client = new Talk.User({
        id: '123',
        name: 'Jean Dupont',
        email: 'jean@example.com',
        photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
        role: 'user'
      });

      const support = new Talk.User({
        id: '456',
        name: 'Support',
        email: 'support@example.com',
        photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
        role: 'support'
      });

      const me = this.role === 'client' ? client : support;
      const other = this.role === 'client' ? support : client;

      const session = new Talk.Session({
        appId: 'tVafoiqb',
        me
      });

      const conversation = session.getOrCreateConversation('conv-static-id');
      conversation.setParticipant(me);
      conversation.setParticipant(other);

      const inbox = session.createInbox({ selected: conversation });
      inbox.mount(document.getElementById('talkjs-container')!);
    });
  }
}