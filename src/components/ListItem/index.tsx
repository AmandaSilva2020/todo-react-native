import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { styles } from "./styles"
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Task } from "@/src/screens/Home";

type ListItemProps = {
  task: Task;
  onRemove: () => void;
  onToggle: () => void;
}

type CheckBoxProps = {
  onChange: () => void;
  checked: boolean;
}

export function ListItem({task, onRemove, onToggle}: ListItemProps){
    return(
        <View style={styles.container}>
            <Checkbox onChange={onToggle} checked={task.completed} />
            <Text style={[styles.taskUndone, task.completed && styles.taskDone]}>
                {task.description}
            </Text>
            <TouchableOpacity onPress={onRemove}>
                <Ionicons name="trash-outline" size={20} color="#808080" style={{marginLeft: 2}} />
            </TouchableOpacity>
        </View>
    )
}

function Checkbox({ onChange, checked }: CheckBoxProps) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}>
      {checked && <Ionicons name="checkmark" size={14} color="white" style={{marginLeft: 2}} />}
    </Pressable>
  );
}