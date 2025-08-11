from datetime import datetime
from . import db

class Contato(db.Model):
    __tablename__ = 'contatos'
    
    id = db.Column(db.Integer, primary_key=True)
    primeiro_nome = db.Column(db.String(100), nullable=False)
    segundo_nome = db.Column(db.String(100), nullable=False)
    empresa = db.Column(db.String(150))
    email = db.Column(db.String(150), nullable=False)
    telefone = db.Column(db.String(50), nullable=False)
    objetivo = db.Column(db.String(200))
    mensagem = db.Column(db.Text)
    criado_em = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return f"<Contato {self.primeiro_nome} {self.segundo_nome} - {self.email}>"
