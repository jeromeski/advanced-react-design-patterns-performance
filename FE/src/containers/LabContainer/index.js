import React from 'react';
import { connect } from 'react-redux';
import Lab from './components/Lab';

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const LabContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Lab);

export default LabContainer;
