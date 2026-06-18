import {
  View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity
} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react'; // corrigido: antes estava "use, useState"
 
export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
 
  const [mensagemSistema, setMensagemSistema] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');
 
  function validarLogin() {
    if (email === '') {
      setMensagemSistema('Digite seu e-mail!');
      setTipoMensagem('erro');
      return;
    }
 
    if (!email.includes('@') || !email.includes('.com')) {
      setMensagemSistema('Digite um e-mail válido!');
      setTipoMensagem('erro');
      return;
    }
 
    if (senha === '') {
      setMensagemSistema('Digite sua senha!');
      setTipoMensagem('erro');
      return;
    }
 
    if (senha.length < 6) {
      setMensagemSistema('A senha deve ter pelo menos 6 caracteres!');
      setTipoMensagem('erro');
      return;
    }
 
    setMensagemSistema('Login realizado com sucesso!');
    setTipoMensagem('sucesso');
  }
 
  return (
      <ScrollView>
          {/* TOPO */}
          <View style={styles.topo}>
            <Link href="/">
              <Text style={styles.logoP1}>Tech</Text>
              <Text style={styles.logoP2}>Educa</Text>
            </Link>
            <View style={styles.menu}>
              <Link href="/">
                <Text style={styles.menuItem}> Início </Text>
                <Text style={styles.menuItem}> Sobre </Text>
              </Link>
              <Link href="/contato">
                <Text style={styles.menuItem}> Contato </Text>
              </Link>
            </View>
          </View>
 
          {/* CONTEÚDO */}
          <View style={styles.container}>
            <View style={styles.paginaAuth}>
              <Text style={styles.tituloAuth}>Login</Text>
              <Text>Entre com seu e-mail e senha para acessar os cursos.</Text>
              <View style={styles.blocoAuth}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  placeholder="Digite seu e-mail"
                  keyboardType="email-address" // corrigido
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  placeholder="Digite sua senha"
                  secureTextEntry={true}
                  value={senha}
                  onChangeText={setSenha}
                  style={styles.input}
                />
 
                <TouchableOpacity style={styles.btnPrimario} onPress={validarLogin}>
                  <Text style={styles.textoBotao}>Login</Text>
                </TouchableOpacity>
 
                <Text style={tipoMensagem === 'erro' ? styles.mensagemErro : styles.MensagemSucesso}>
                  {mensagemSistema}
                </Text>
 
                <Text style={styles.linkAuth}>Ainda não possui uma conta?</Text>
                <Link style={styles.linkAuthDestaque} href="/cadastro">
                  <Text>Fazer Cadastro</Text>
                </Link>
              </View>
            </View>
          </View>
 
          {/* RODAPÉ */}
          <View style={styles.rodape}>
            <Text style={styles.textoRodape}>2026 TechEduca. Todos os Direitos Reservados</Text>
            <Link href="/contato">
              <Text style={styles.linkRodape}>Entre em contato</Text>
            </Link>
          </View>
      </ScrollView>
  );
}
 
const styles = StyleSheet.create(
{
  topo: {
      backgroundColor: '#1a4db3',
    padding:20,
    alignItems: 'center',
    gap: 10,
  },
 
  logoP1 : {
    color: '#ffffff',
    fontSize:24,
    fontWeight: 'bold',
  },
 
  logoP2 : {
    color: '#ff6a00',
    fontSize:24,
    fontWeight: 'bold',
  },
 
    menu: {
      marginTop: 10,
      alignItems: 'center',
      gap: 10,
    },
 
    menuItem: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
 
    ativo: {
      color: '#ff6a00',
    },
 
    container: {
      padding: 20,
    },
 
    paginaAuth:{
      paddingVertical: 40,
      paddingHorizontal: 20,
    },
 
    blocoAuth: {
      backgroundColor: '#ffffff',
      gap: 10,
      padding: 30,
      borderRadius: 8,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
 
    MensagemSucesso:{
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'green',
      marginTop: 15
    },
 
    mensagemErro:{
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'red',
      marginTop: 15,
    },
 
    linkAuth: {
      textAlign: 'center',
      marginTop: 20,
      color: '#222',
    },
 
    linkAuthDestaque:{
      color:'#1a4db3',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 5,
    },
 
    tituloAuth:{
      color: '#1a4db3',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
 
    textoAuth:{
      textAlign: 'center',
      marginBottom: 20,
      color: '#555',
      fontSize: 16,
    },
 
    label:{
      fontWeight: 'bold',
      color: '#222',
    },
 
    input:{
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      fontSize: 16,
    },
 
    btnPrimario:{
      backgroundColor: '#fff6a00',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 10,
    },
    textoBotao: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
 
    mensagemAuth: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 10,
      marginHeight: 20,
    },
 
    linkAuth:{
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#222',
      fontWeight: 'bold',
    },
 
    btnLogin: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 10,
    },
   
    hero: {
      backgroundColor: '#ffffff',
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
 
    },
 
    heroContent: {
      alignItems: 'center',
      gap: 10,
      width: '100%',
    },
 
    heroTitulo: {
      fontSize: 28,
      color: '#1a4db3',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
 
    avisoLogin: {
      fontSize: 16,
      color: '#222',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
 
    btnPrimario: {
      backgroundColor: '#ff6a00',
      color: '#ffffff',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 8,
      marginBottom: 10,
      minWidth: 160,
    },
 
    btnSecundario: {
      backgroundColor: '#ffffff',
      color: '#1a4db3',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 8,
      borderColor: '#1a4db3',
      borderWidth: 2,
      textDecorationLine: 'none',
      marginTop: 10,
      minWidth: 160,
    },
 
    textoBotao: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
 
    textoBotaoPri: {
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
 
    textoBotaoSec: {
      color: '#222',
      fontWeight: 'bold',
      textAlign: 'center',
    },
 
    descricao: {
      color: '#222',
      fontSize: 28,
      textAlign: 'center',
      lineHeight: 25,
      marginBottom: 10,
    },
 
    destaques: {
      padding: 20,
    },
 
    container: {
      padding: 20,
    },
 
    cards: {
      marginTop: 20,
      gap: 15,
    },
 
    card: {
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 8,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
 
    cardTitulo: {
      color: '#1a4db3',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },
 
    cardDescricao: {
      color: '#222',
      fontSize: 15,
      textAlign: 'center',
      lineHeight: 22,
    },
 
    rodape: {
      backgroundColor: '#1a4db3',
      padding: 20,
      alignItems: 'center',
      gap: 8,
    },
 
    textoRodape: {
      color: '#ffffff',
      textAlign: 'center',
      marginBottom: 8,
    },
 
    linkRodape: {
      color: '#ff6a00',
      fontWeight: 'bold',
      textDecorationLine: 'none',
    },
 
    tituloDestaque: {
      color: '#1a4db3',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
}
)
 
 