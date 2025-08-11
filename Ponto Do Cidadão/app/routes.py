from flask import Blueprint, render_template, request, redirect, flash, url_for
from app import db
from app.models import Contato

main = Blueprint('main', __name__)

@main.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # Pega os dados do formulário
        primeiro_nome = request.form.get('firstName')
        segundo_nome = request.form.get('lastName')
        empresa = request.form.get('address')
        email = request.form.get('email')
        telefone = request.form.get('phone')
        objetivo = request.form.get('subject')
        mensagem = request.form.get('message')

        # Criar um novo objeto Contato
        novo_contato = Contato(
            primeiro_nome=primeiro_nome,
            segundo_nome=segundo_nome,
            empresa=empresa,
            email=email,
            telefone=telefone,
            objetivo=objetivo,
            mensagem=mensagem
        )

        # Salvar no banco
        try:
            db.session.add(novo_contato)
            db.session.commit()
            flash("Seu formulário foi enviado com sucesso.", "success")
        except Exception as e:
            db.session.rollback()
            flash("Erro ao enviar o formulário. Tente novamente.", "error")
            print(f"Erro ao salvar no banco: {e}")

        return redirect(url_for('main.home'))

    return render_template("home.html")


@main.route("/about")
def about():
    return render_template("about.html")


@main.route("/project")
def project():
    return render_template("project.html")

@main.route("/news")
def news():
    return render_template("news.html")

@main.route("/project/direitos-humanos")
def projectDiretosHumanos():
    return render_template("templates_project/direitos-humanos.html")


